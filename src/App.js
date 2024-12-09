import './App.css';
import Login from './components/login';
import HomePage from './components/homepage';
import Products from './components/products-list/products';
import ProductDetails from './components/product-details';
import { BrowserRouter, Route, Routes } from 'react-router';
import Cart from './components/cart';
import Header from './components/Header';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="products" element={<Products />} />
          <Route path="product-details" element={<ProductDetails />} />
          <Route path="product-details/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
