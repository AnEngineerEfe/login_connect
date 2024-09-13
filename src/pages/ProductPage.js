import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setProducts, addProduct, removeProduct, updateProduct } from '../redux/productSlice';
import ProductForm from '../components/ProductForm';
import ProductTable from '../components/ProductTable';

const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        dispatch(setProducts(response.data.products));
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };
    fetchProducts();
  }, [dispatch]);

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  };

  const handleUpdateProduct = (product) => {
    setEditingProduct(product);
  };

  const handleSaveProduct = (product) => {
    dispatch(updateProduct(product));
    setEditingProduct(null);
  };

  const handleDeleteProduct = (product) => {
    dispatch(removeProduct(product));
  };

  return (
    <div>
      <h1>Product Page</h1>
      <ProductForm onAddProduct={handleAddProduct} onSaveProduct={handleSaveProduct} productToEdit={editingProduct} />
      <ProductTable 
        products={products} 
        onUpdateProduct={handleUpdateProduct} 
        onDeleteProduct={handleDeleteProduct} 
      />
    </div>
  );
};

export default ProductPage;
