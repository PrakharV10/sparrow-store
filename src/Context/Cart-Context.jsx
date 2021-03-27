import React, { createContext, useContext, useReducer, useState } from 'react';
import data from '../Product';

// Cart, Wishlist, Products Context 
const CartContext = createContext();

const ADD_TO_WISHLIST = "ADDTOWISHLIST"
const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST"
const ADD_TO_CART = "ADD_TO_CART";

function dispatchFunc(state, {type,payload}) {
    switch (type) {
        case ADD_TO_WISHLIST:
            return { ...state, wishList: [...state.wishList, payload] }
        case REMOVE_FROM_WISHLIST:
            return { ...state, wishList: state.wishList.filter(wish => wish.id !== payload.id) }
        case ADD_TO_CART:
            return {...state, wishList: state.wishList.filter(wish => wish.id !== payload.id), cart : [...state.cart, payload]}
        default:
            return state
    }
}

export function CartProvider({ children }) {
    
    const [state, dispatch] = useReducer(dispatchFunc, {
        cart: [],
        wishList : []
    });

    return (
        <CartContext.Provider value={{ data, state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}


// Current Product Context
const CurrProdContext = createContext();

export function CurrProdProvider({ children }) {

    const [current, setCurrent] = useState([]);

    return (
        <CurrProdContext.Provider value={{current, setCurrent}}>
            {children}
        </CurrProdContext.Provider>
    )
}

export function useCurrProduct() {
    return useContext(CurrProdContext);
}


// Current Route Context
const RouteContext = createContext();

export function RouteProvider({ children }) {
    
    const [route, setRoute] = useState("Home");
    // Home, Cart, Wishlist, Products, Account, Product-Description

    return (
        <RouteContext.Provider value={{route,setRoute}}>
            {children}
        </RouteContext.Provider>
    )
}

export function useRoute() {
    return useContext(RouteContext);
}


// Toast Show Context
const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [toast, setToast] = useState({
        show: false,
        action : "Add"
    });

    return (
        <ToastContext.Provider value={{toast,setToast}}>
            {children}
        </ToastContext.Provider>
    )
}

export function useToast() {
    return useContext(ToastContext)
}