import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/products" element={<ProductPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
