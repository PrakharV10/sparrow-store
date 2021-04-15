import React from 'react'
import { useNavigate, useParams } from 'react-router';
import { useCart } from '../../Context/Cart-Context'

import './ProductDetails.css'

function ProductDetails() {

    const { state, dispatch } = useCart();
    const { id } = useParams();
    const navigate = useNavigate();
    const current = state.data.find(one => one.id === id)

    function searchCart() {
        if (state.cart.filter(item => item.id === current.id).length === 0)
            return false
        return true
    }

    function cartButtonHandler() {
        if (searchCart() === false)
            dispatch({ type: "ADD_TO_CART", payload: current })
        else
            navigate('cart')
    }

    return (
        <div className="product-details">
            <div className="product-name">
                {current.name}
            </div>
            <div className="product-rating gray-text">
                {current.ratings} ratings
            </div>
            <div className="product-brand">
                Brand : <span className="gray-text">{current.brand}</span> 
            </div>
            <div className="stock">
                Availability : <span className="gray-text">{current.inStock === true ? `In Stock` : "Out of Stock"}</span>
            </div>
            <div className="product-text">
                Description : <div className="gray-text">{current.desc}</div>
            </div>
            <div className="product-price">
                ${current.price}
            </div>
            {
                current.inStock === true ?
                    <button
                        onClick = {cartButtonHandler}
                        className="btn btn-black">
                        {searchCart() === false ? `ADD TO CART` : `GO TO CART`}
                    </button>
                    :
                    <button className="btn btn-disabled">ADD TO CART</button>
            }
        </div>
    )
}

export default ProductDetails
