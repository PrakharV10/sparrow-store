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
			if (authState.isUserLoggedIn) setIsLoading(false);
		})();
	}, []);

	const getUserDetails = async () => {
		const { response } = await serverCallHandler('GET', `${SERVER_URL}/user`);
		console.log(response.data);
		if (response.success) {
			authDispatch({
				type: 'SAVE_USER_DETAILS_FROM_SERVER',
				payload: {
					username: response.data.username,
					email: response.data.email,
				},
			});
			cartDispatch({
				type: 'SAVE_USER_AND_WISHLIST_FROM_SERVER',
				payload: {
					cart: response.data.cart,
					wishlist: response.data.wishlist,
				},
			});
		}
	};

	useEffect(() => {
		(async function () {
			if (authState.isUserLoggedIn) {
				await setupAuthHeaderForServiceCalls(authState.authToken);
				await getUserDetails();
				setIsLoading(false);
			}
		})();
	}, [authState.isUserLoggedIn]);

	return (
		<CartContext.Provider value={{ cartState, cartDispatch }}>{children}</CartContext.Provider>
	);
}

export function useCart() {
	return useContext(CartContext);
}
