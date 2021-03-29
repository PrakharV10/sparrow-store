import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Pagination from './Components/Pagination/Pagination';
import Toast from './Components/Toast/Toast';
import { useRoute, useToast } from './Context/Cart-Context';
import CartPage from './Pages/CartPage/CartPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import ProductDesc from './Pages/ProductDescription/ProductDesc';
import ProductPage from './Pages/ProductScreen/ProductPage';
import WishlistPage from './Pages/WishlistPage/WishlistPage';

function App() {

  const { route, setRoute } = useRoute();
    // Home, Cart, Wishlist, Products, Account, Products-Description

  const { toast, setToast } = useToast();

  return (
    <div className="App">
      <Header />
      <NavBar route={route} setRoute={setRoute} />
      
      <main>
        {route !== "Home" && <Pagination route={route} />}
        {route === "Products" && <ProductPage route={route} />}
        {route === "Wishlist" && <WishlistPage />}
        {route === "Product-Description" && <ProductDesc />}
        {route === "Cart" && <CartPage />}
        <Toast toast={toast} setToast={setToast} />
      </main>

      <section>
        {route === "Home" && <LandingPage />}
      </section>
    </div>
  );
}

export default App;
