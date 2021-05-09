import React, { createContext, useContext, useReducer, useState} from 'react';
import { cartReducer, initialCartState } from '../Reducer/CartReducer.js';
import { authReducer, initialAuthState } from '../Reducer/authReducer.js';

// Cart, Wishlist, Products Context 
const CartContext = createContext();

export function CartProvider({ children }) {
    
    const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

    return (
        <CartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}


const AuthContext = createContext();

export function AuthProvider({ children }) {
    
    const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

    return (
        <AuthContext.Provider value={{ authState, authDispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}