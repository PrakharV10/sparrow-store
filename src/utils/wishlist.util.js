import notifyToast from '../Components/Toast/notifyToast';
import { SERVER_URL } from './api';
import { serverCallHandler } from './serverCallHandler';

export function searchWishList(cartState, product) {
	if (cartState.wishList.find((wish) => wish._id === product._id)) {
		return true;
	}
	return false;
}

export async function serverAddToWishlist(cartDispatch, product) {
	const { response } = await serverCallHandler('POST', `${SERVER_URL}/wishlist`, {
		productId: product._id,
	});
	if (response.success) {
		cartDispatch({ type: 'ADD_TO_WISHLIST', payload: { product } });
	} else {
		notifyToast(response.message);
	}
}

export async function serverRemoveFromWishlist(cartDispatch, product) {
	const { response } = await serverCallHandler('DELETE', `${SERVER_URL}/wishlist`, {
		productId: product._id,
	});
	if (response.success) {
		cartDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: { product } });
	} else {
		notifyToast(response.message);
	}
}
