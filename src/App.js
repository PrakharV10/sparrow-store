import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';

import { useLoading } from '@agney/react-loading';
import NavBar from './Components/NavBar/NavBar';
import { useAuth, useCart} from './Context/context';
import CartPage from './Pages/CartPage/CartPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import Login from './Pages/Login/Login';
import ProductDesc from './Pages/ProductDescription/ProductDesc';
import ProductPage from './Pages/ProductScreen/ProductPage';
import Signup from './Pages/Signup/Signup';
import WishlistPage from './Pages/WishlistPage/WishlistPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
function App() {

  const { authState, authDispatch } = useAuth();
  const { cartState, cartDispatch } = useCart();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const memory = JSON.parse(localStorage.getItem("Login"))
    if(memory)
      serverFetchOnStart(memory)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const { containerProps, indicatorEl } = useLoading({
    loading: loading,
  });
  
  async function serverFetchOnStart(memory) {
    const currentUser = await axios.get(`https://Sparrow-Store.prakhar10v.repl.co/user/${memory.userId}`)
    authDispatch({ type: "CHECK_LOGIN_ON_STARTUP", payload: currentUser.data.user[0]})
    cartDispatch({ type: "SAVE_USER_ON_LOGIN", payload: currentUser.data.user[0] })
  }

  // console.log(cartState)

  return (
    <div className="App">
      {
        !loading &&
        <>
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
        </> 
      }
      {
        loading && <section
          className = "loader"
          {...containerProps}
        >
          {indicatorEl}
        </section>
      }
    </div>
  );
}

export default App;
