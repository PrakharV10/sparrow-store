const SAVE_CART_FROM_SERVER = 'SAVE_CART_FROM_SERVER';
const SAVE_WISHLIST_FROM_SERVER = 'SAVE_WISHLIST_FROM_SERVER';
const SAVE_ALL_PRODUCTS = 'SAVE_ALL_PRODUCTS';
const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_CART_ITEM_QUANTITY = 'UPDATE_CART_ITEM_QUANTITY';
const INITIALIZE_EMPTY_CART_AND_WISHLIST = 'INITIALIZE_EMPTY_CART_AND_WISHLIST';
const SORT = 'SORT';
const ADD_BRAND = 'ADD_BRAND';
const REMOVE_BRAND = 'REMOVE_BRAND';
const TOGGLE_STOCK = 'TOGGLE_STOCK';
const TOGGLE_DELIVERY = 'TOGGLE_DELIVERY';
const SEARCH_FILTER = 'SEARCH_FILTER';
const LOG_OUT_HANDLER = 'LOG_OUT_HANDLER';
const CLEAR_SEARCH = 'CLEAR_SEARCH';

export function cartReducer(state, { type, payload }) {
	switch (type) {
		case INITIALIZE_EMPTY_CART_AND_WISHLIST:
			return {
				...state,
				cart: [],
				wishList: [],
			};
		case SAVE_CART_FROM_SERVER:
			return { ...state, cart: payload.cart };
		case SAVE_WISHLIST_FROM_SERVER:
			return { ...state, wishList: payload.wishlist };
		case SAVE_ALL_PRODUCTS:
			return { ...state, data: payload.products };
		case ADD_TO_WISHLIST:
			return { ...state, wishList: [...state.wishList, payload.product] };
		case REMOVE_FROM_WISHLIST:
			return {
				...state,
				wishList: state.wishList.filter((one) => one._id !== payload.product._id),
			};
		case ADD_TO_CART:
			return { ...state, cart: [...state.cart, { quantity: 1, product: payload.cartItem }] };
		case REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter((item) => item.product._id !== payload.cartItem._id),
			};
		case UPDATE_CART_ITEM_QUANTITY:
			return {
				...state,
				cart: state.cart.map((item) => {
					if (item.product._id === payload.cartItem._id) {
						if (payload.action === 'ADD')
							return { ...item, quantity: item.quantity + 1 };
						return { ...item, quantity: item.quantity - 1 };
					}
					return item;
				}),
			};
		case CLEAR_SEARCH:
			return {
				...state,
				searchKeyWord: '',
			};
		case ADD_BRAND:
			return { ...state, brandName: [...state.brandName, payload] };
		case REMOVE_BRAND:
			return { ...state, brandName: state.brandName.filter((brand) => brand !== payload) };
		case SORT:
			return { ...state, sortBy: payload };
		case TOGGLE_STOCK:
			return { ...state, outOfStock: !state.outOfStock };
		case TOGGLE_DELIVERY:
			return { ...state, fastDelivery: !state.fastDelivery };
		case SEARCH_FILTER:
			return { ...state, searchKeyWord: payload };
		case LOG_OUT_HANDLER:
			return { ...state, wishList: [], cart: [] };
		default:
			return state;
	}
}

export const initialCartState = {
	data: [],
	cart: null,
	wishList: [],
	sortBy: null,
	outOfStock: false,
	fastDelivery: false,
	searchKeyWord: '',
	brandName: [],
};
