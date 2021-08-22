import notifyToast from '../Components/Toast/notifyToast';
import { SERVER_URL } from './api';
import { serverCallHandler } from './serverCallHandler';

export function searchCart(cartState, product) {
	if (cartState !== null && cartState.cart.find((item) => item.product._id === product._id))
		return true;
	return false;
}

export async function serverAddToCart(cartDispatch, product) {
	const { response } = await serverCallHandler('POST', `${SERVER_URL}/cart`, {
		productId: product._id,
	});
	if (response.success) {
		cartDispatch({ type: 'ADD_TO_CART', payload: { cartItem: product } });
	} else {
		notifyToast(response.message);
	}
}

export async function updateCartItemQuantity(cartDispatch, product, action) {
	notifyToast('UPDATING QUANTITY');
	const { response } = await serverCallHandler('PUT', `${SERVER_URL}/cart`, {
		productId: product._id,
		action,
	});
	if (response.success) {
		cartDispatch({ type: 'UPDATE_CART_ITEM_QUANTITY', payload: { cartItem: product, action } });
	} else {
		alert(response.message);
	}
}

export async function deleteCartItem(cartDispatch, product) {
	const { response } = await serverCallHandler('DELETE', `${SERVER_URL}/cart`, {
		productId: product._id,
	});
	if (response.success) {
		cartDispatch({ type: 'REMOVE_FROM_CART', payload: { cartItem: product } });
	} else {
		alert(response.message);
	}
}
