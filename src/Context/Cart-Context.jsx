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