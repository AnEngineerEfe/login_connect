import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ProductForm = ({ onAddProduct, onSaveProduct, productToEdit }) => {
  const initialValues = { name: '', price: '' };

  
  useEffect(() => {
    if (productToEdit) {
      setValues(productToEdit);
    }
  }, [productToEdit, setValues]);

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    price: Yup.number().required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (productToEdit) {
      onSaveProduct({ ...values, id: productToEdit.id });
    } else {
      onAddProduct(values);
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={productToEdit || initialValues} 
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ setValues }) => (
        <Form>
          <div>
            <label htmlFor="name">Product Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <Field name="price" type="number" />
            <ErrorMessage name="price" />
          </div>
          <button type="submit">{productToEdit ? 'Save Changes' : 'Add Product'}</button>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
