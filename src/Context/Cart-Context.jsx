import React, { createContext, useContext, useReducer } from 'react';
import data from '../Product';

const CartContext = createContext();

const ADD_TO_WISHLIST = "ADDTOWISHLIST"
const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST"

function dispatchFunc(state, {type,payload}) {
    switch (type) {
        case ADD_TO_WISHLIST:
            return { ...state, wishList: [...state.wishList, payload] }
        case REMOVE_FROM_WISHLIST:
            return {...state, wishList : state.wishList.filter(wish => wish.id !== payload.id)}
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