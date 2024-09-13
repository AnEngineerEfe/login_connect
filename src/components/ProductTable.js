import React from 'react';

const ProductTable = ({ products, onUpdateProduct, onDeleteProduct }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>
              <button onClick={() => onUpdateProduct(product)}>Update</button>
              <button onClick={() => onDeleteProduct(product)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
