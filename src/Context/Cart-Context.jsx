import React, { createContext, useContext, useReducer } from 'react';
import data from '../Product';

const CartContext = createContext();

const ADD_TO_WISHLIST = "ADDTOWISHLIST"

function dispatchFunc(state, {type,payload}) {
    switch (type) {
        case ADD_TO_WISHLIST:
            return {...state, wishList : [...state.wishList, payload]}
        default:
            return state
    }
}

export function CartProvider({ children }) {
    
    const [state, dispatch] = useReducer(dispatchFunc, {
        cart: [],
        wishList : []
    });

    console.log(state)

    return (
        <CartContext.Provider value={{ data, state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}



export function useCart() {
    return useContext(CartContext)
}