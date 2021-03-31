import React, { createContext, useContext, useReducer, useState } from 'react';
import { dispatchFunc, initialState } from '../Reducer/CartReducer.js';

// Cart, Wishlist, Products Context 
const CartContext = createContext();

export function CartProvider({ children }) {
    
    const [state, dispatch] = useReducer(dispatchFunc, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
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