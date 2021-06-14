import { Route, Routes } from 'react-router';
import './App.css';

import {
	LandingPage,
	ProductPage,
	WishlistPage,
	ProductDesc,
	CartPage,
	Login,
	Signup,
} from './Pages';

import NavBar from './Components/NavBar/NavBar';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
function App() {
	return (
		<div className="App">
			<div>
				<NavBar />

				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/products" element={<ProductPage />} />
					<PrivateRoute path="/wishlist" element={<WishlistPage />} />
					<Route path="/products/:productId" element={<ProductDesc />} />
					<PrivateRoute path="/cart" element={<CartPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
