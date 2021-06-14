import notifyToast from '../Components/Toast/notifyToast';
import { SERVER_URL } from './api';
import { serverCallHandler } from './serverCallHandler';

export function searchCart(cartState, product) {
	if (cartState && cartState.cart.find((item) => item.product === product._id)) return true;
	return false;
}

export async function serverAddToCart(cartDispatch, product) {
	const { response } = await serverCallHandler('POST', `${SERVER_URL}/cart`, {
		productId: product._id,
	});
	if (response.success) {
		cartDispatch({ type: 'UPDATE_CART', payload: { cart: response.data } });
	} else {
		notifyToast(response.message);
	}
}

export async function updateCartItemQuantity(cartDispatch, product, action) {
	notifyToast('UPDATING QUANTITY');
	const { response } = await serverCallHandler('PUT', `${SERVER_URL}/cart`, {
		productId: product,
		action,
	});
	if (response.success) {
		cartDispatch({ type: 'UPDATE_CART', payload: { cart: response.data } });
	} else {
		alert(response.message);
	}
}

export async function deleteCartItem(cartDispatch, product) {
	const { response } = await serverCallHandler('DELETE', `${SERVER_URL}/cart`, {
		productId: product,
	});
	if (response.success) {
		cartDispatch({ type: 'UPDATE_CART', payload: { cart: response.data } });
	} else {
		alert(response.message);
	}
}
