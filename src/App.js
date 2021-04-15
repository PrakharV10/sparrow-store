import { Route, Routes } from 'react-router';
import './App.css';

import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Toast from './Components/Toast/Toast';
import { useToast } from './Context/Cart-Context';
import CartPage from './Pages/CartPage/CartPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import ProductDesc from './Pages/ProductDescription/ProductDesc';
import ProductPage from './Pages/ProductScreen/ProductPage';
import WishlistPage from './Pages/WishlistPage/WishlistPage';

function App() {

  const { toast, setToast } = useToast();

  return (
    <div className="App">
      <Header />
      <NavBar />

      <Routes >
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element = {<ProductPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/products/:id" element={<ProductDesc />} />
        <Route path="/cart" element= {<CartPage />} />
      </Routes>
      
      <Toast toast={toast} setToast={setToast} />
    </div>
  );
}

export default App;
