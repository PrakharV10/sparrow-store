import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { cartReducer, initialCartState } from '../Reducer/CartReducer.js';
import { SERVER_URL } from '../utils/api.js';
import { serverCallHandler, setupAuthHeaderForServiceCalls } from '../utils/serverCallHandler.js';
import { useAuth } from './authContext.jsx';
import { useIsLoading } from './isLoadingContext.jsx';

const CartContext = createContext();

export function CartProvider({ children }) {
	const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
	const { authState, authDispatch } = useAuth();
	const { setIsLoading } = useIsLoading();

	useEffect(() => {
		(async () => {
			const { response } = await serverCallHandler('GET', `${SERVER_URL}/products`);
			if (response.success) {
				cartDispatch({
					type: 'SAVE_ALL_PRODUCTS',
					payload: { products: response.data },
				});
			} else {
				console.log(response.message);
			}
		})();
	}, []);

	const getUserDetails = async () => {
		const { response } = await serverCallHandler('GET', `${SERVER_URL}/user`);
		if (response.success) {
			authDispatch({
				type: 'SAVE_USER_DETAILS_FROM_SERVER',
				payload: {
					username: response.data.username,
					email: response.data.email,
				},
			});
		}
	};

	const getWishlistItems = async () => {
		const { response } = await serverCallHandler('GET', `${SERVER_URL}/wishlist`);
		if (response.success) {
			cartDispatch({
				type: 'SAVE_WISHLIST_FROM_SERVER',
				payload: {
					wishlist: response.data,
				},
			});
		}
	};

	const getCartDetails = async () => {
		const { response } = await serverCallHandler('GET', `${SERVER_URL}/cart`);
		if (response.success) {
			cartDispatch({
				type: 'SAVE_CART_FROM_SERVER',
				payload: {
					cart: response.data,
				},
			});
		}
	};

	useEffect(() => {
		(async function () {
			if (authState.isUserLoggedIn) {
				await setupAuthHeaderForServiceCalls(authState.authToken);
				await getUserDetails();
				await getWishlistItems();
				await getCartDetails();
			} else {
				cartDispatch({
					type: 'INITIALIZE_EMPTY_CART_AND_WISHLIST',
				});
			}
		})();
	}, [authState.isUserLoggedIn]);

	useEffect(() => {
		if (cartState.cart !== null && cartState.data.length !== 0) {
			setIsLoading(false);
		}
	}, [authState.isUserLoggedIn, cartState.cart, cartState.data, setIsLoading]);

	return (
		<CartContext.Provider value={{ cartState, cartDispatch }}>{children}</CartContext.Provider>
	);
}

export function useCart() {
	return useContext(CartContext);
}
