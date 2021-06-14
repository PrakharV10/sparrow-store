const SAVE_USER_CART_AND_WISHLIST_FROM_SERVER = 'SAVE_USER_CART_AND_WISHLIST_FROM_SERVER';
const SAVE_ALL_PRODUCTS = 'SAVE_ALL_PRODUCTS';
const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const SORT = 'SORT';
const TOGGLE_STOCK = 'TOGGLE_STOCK';
const TOGGLE_DELIVERY = 'TOGGLE_DELIVERY';
const SEARCH_FILTER = 'SEARCH_FILTER';
const DECREASE_CART_ITEM_QUANTITY = 'DECREASE_CART_ITEM_QUANTITY';
const CHANGE_CART_ITEM_QUANTITY = 'CHANGE_CART_ITEM_QUANTITY';

export function cartReducer(state, { type, payload }) {
	switch (type) {
		case SAVE_USER_CART_AND_WISHLIST_FROM_SERVER:
			return { ...state, cart: payload.cart, wishList: payload.wishlist };
		case SAVE_ALL_PRODUCTS:
			return { ...state, data: payload.products };
		case ADD_TO_WISHLIST:
			return { ...state, wishList: payload };
		case REMOVE_FROM_WISHLIST:
			return { ...state, wishList: payload };
		case ADD_TO_CART:
			return { ...state, cart: payload };
		case CHANGE_CART_ITEM_QUANTITY:
			return { ...state, cart: payload };
		case REMOVE_FROM_CART:
			return { ...state, cart: payload };
		case SORT:
			return { ...state, sortBy: payload };
		case TOGGLE_STOCK:
			return { ...state, outOfStock: !state.outOfStock };
		case TOGGLE_DELIVERY:
			return { ...state, fastDelivery: !state.fastDelivery };
		case SEARCH_FILTER:
			return { ...state, searchKeyWord: payload };
		default:
			return state;
	}
}

export const initialCartState = {
	data: [],
	cart: [],
	wishList: [],
	sortBy: null,
	outOfStock: false,
	fastDelivery: false,
	searchKeyWord: '',
};
