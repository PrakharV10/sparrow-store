import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';

import NavBar from './Components/NavBar/NavBar';
import Toast from './Components/Toast/Toast';
import { useAuth, useToast } from './Context/context';
import CartPage from './Pages/CartPage/CartPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import Login from './Pages/Login/Login';
import ProductDesc from './Pages/ProductDescription/ProductDesc';
import ProductPage from './Pages/ProductScreen/ProductPage';
import Signup from './Pages/Signup/Signup';
import WishlistPage from './Pages/WishlistPage/WishlistPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {

  const { toast, setToast } = useToast();
  const { dispatch } = useAuth();

  useEffect(() => {
    const memory = JSON.parse(localStorage.getItem("Login"))
    if(memory)
      dispatch({ type: "CHECK_LOGIN_ON_STARTUP", payload: memory })
  },[dispatch])

  return (
    <div className="App">
      <NavBar />

      <Routes >
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element = {<ProductPage />} />
        <PrivateRoute path="/wishlist" element={<WishlistPage />} />
        <Route path="/products/:id" element={<ProductDesc />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Toast toast={toast} setToast={setToast} />
    </div>
  );
}

export default App;
