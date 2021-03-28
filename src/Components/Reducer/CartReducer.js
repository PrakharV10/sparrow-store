const ADD_TO_WISHLIST = "ADDTOWISHLIST"
const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST"
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const SORT = "SORT";
const TOGGLE_STOCK = "TOGGLE_STOCK";
const TOGGLE_DELIVERY = "TOGGLE_DELIVERY";

export function dispatchFunc(state, {type,payload}) {
    switch (type) {
        case ADD_TO_WISHLIST:
            return { ...state, wishList: [...state.wishList, payload] }
        case REMOVE_FROM_WISHLIST:
            return { ...state, wishList: state.wishList.filter(wish => wish.id !== payload.id) }
        case ADD_TO_CART:
            return { ...state, wishList: state.wishList.filter(wish => wish.id !== payload.id), cart: [...state.cart, payload] }
        case REMOVE_FROM_CART:
            return {...state, cart: state.cart.filter(item => item.id !== payload.id)}
        case SORT:
            return { ...state, sortBy: payload }
        case TOGGLE_STOCK:
            return { ...state, outOfStock: !state.outOfStock }
        case TOGGLE_DELIVERY:
            return {...state, fastDelivery : !state.fastDelivery}
        default:
            return state
    }
};

export const initialState = {
    cart: [],
    wishList: [],
    sortBy: null,
    outOfStock: false,
    fastDelivery : false
};