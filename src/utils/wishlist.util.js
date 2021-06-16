import notifyToast from '../Components/Toast/notifyToast';
import { SERVER_URL } from './api';
import { serverCallHandler } from './serverCallHandler';

export function searchWishList(cartState, productId) {
	if (cartState.wishList.find((wish) => wish === productId)) {
		return true;
	}
	return false;
}

export async function serverAddToWishlist(cartDispatch, productId) {
	const { response } = await serverCallHandler('POST', `${SERVER_URL}/wishlist`, {
		productId: productId,
	});
	if (response.success) {
		cartDispatch({ type: 'ADD_TO_WISHLIST', payload: { productId } });
	} else {
		notifyToast(response.message);
	}
}

export async function serverRemoveFromWishlist(cartDispatch, productId) {
	const { response } = await serverCallHandler('DELETE', `${SERVER_URL}/wishlist`, {
		productId: productId,
	});
	if (response.success) {
		cartDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: { productId } });
	} else {
		notifyToast(response.message);
	}
}
