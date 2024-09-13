import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ProductForm = ({ onAddProduct, onSaveProduct, productToEdit }) => {
  const initialValues = productToEdit || { name: '', price: '' };
  
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    price: Yup.number().required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (productToEdit) {
      onSaveProduct(values);
    } else {
      onAddProduct(values);
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
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
    </Formik>
  );
};

export default ProductForm;
