import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Pagination from './Components/Pagination/Pagination';
import ProductPage from './Pages/ProductScreen/ProductPage';
import WishlistPage from './Pages/WishlistPage/WishlistPage';

function App() {

  const [route, setRoute] = useState("Products");
  // Home, Cart, Wishlist, Products, Account

  return (
    <div className="App">
      <Header />
      <NavBar route={route} setRoute={setRoute} />
      
      <main>
        <Pagination route={route} />
        {route === "Products" && <ProductPage route={route} />}
        {route === "Wishlist" && <WishlistPage />}
      </main>
    </div>
  );
}

export default App;
