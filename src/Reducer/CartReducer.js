const SAVE_USER_ON_LOGIN = "SAVE_USER_ON_LOGIN"
const GET_PRODUCTS_FROM_SERVER = "GET_PRODUCTS_FROM_SERVER"
const ADD_TO_WISHLIST = "ADD_TO_WISHLIST"
const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST"
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const SORT = "SORT";
const TOGGLE_STOCK = "TOGGLE_STOCK";
const TOGGLE_DELIVERY = "TOGGLE_DELIVERY";
const SEARCH_FILTER = "SEARCH_FILTER";
const DECREASE_CART_ITEM_QUANTITY = "DECREASE_CART_ITEM_QUANTITY";
const INCREASE_CART_ITEM_QUANTITY = "INCREASE_CART_ITEM_QUANTITY";

export function cartReducer(state, {type,payload}) {
    switch (type) {
        case SAVE_USER_ON_LOGIN:
            return { ...state, cart: payload.cart, wishList: payload.wishlist }
        case GET_PRODUCTS_FROM_SERVER:
            return {...state, data : payload}
        case ADD_TO_WISHLIST:
            return { ...state, wishList: payload }
        case REMOVE_FROM_WISHLIST:
            return { ...state, wishList: payload }
        case ADD_TO_CART:
            return { ...state, cart: payload }
        case INCREASE_CART_ITEM_QUANTITY:
            return { ...state, cart: state.cart.map(item => item.id === payload.id ? { ...item, qty: item.qty + 1 } : item) }
        case DECREASE_CART_ITEM_QUANTITY:
            return {...state, cart : state.cart.map(item => item.id === payload.id ? {...item, qty : item.qty-1} : item)}
        case REMOVE_FROM_CART:
            return {...state, cart: state.cart.filter(item => item.id !== payload.id)}
        case SORT:
            return { ...state, sortBy: payload }
        case TOGGLE_STOCK:
            return { ...state, outOfStock: !state.outOfStock }
        case TOGGLE_DELIVERY:
            return { ...state, fastDelivery: !state.fastDelivery }
        case SEARCH_FILTER:
            return { ...state, searchKeyWord: payload }
        default:
            return state
    }
};

export const initialCartState = {
    data: [],
    cart: [],
    wishList: [],
    sortBy: null,
    outOfStock: false,
    fastDelivery: false,
    searchKeyWord: ""
};