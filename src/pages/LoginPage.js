import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { login } from '../redux/authSlice';
import "./LoginPage.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    
      const response = await axios.post('https://dummyjson.com/auth/login', values);
      if (response.data.token) {
        dispatch(login({ token: response.data.token }));
        navigate('/products');
      }
  };

  return (
    <div className='log'>
      <h1>Login</h1>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={Yup.object({
          username: Yup.string().required('Required'),
          password: Yup.string().required('Required'),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field name="username" type="text" />
            <ErrorMessage name="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" />
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
