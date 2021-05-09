import React from 'react'
import { useCart } from '../../Context/context'
import './PriceTotal.css'

function PriceTotal() {

    const { cartState } = useCart();

    const total = cartState.cart.reduce((accum, item) => {
        return accum + item.qty*item.price
    },0)

    return (
        <div className="price-total">
            <div>
                <div className="total-title">
                    PRICE DETAILS
                </div>
                <div className="price-breakdown">
                    <span>Price ({cartState.cart.length} Item)</span>
                    <span>Rs. {total}</span>
                </div>
                <div className="price-breakdown">
                    <span>Discount</span>
                    <span className="c-green">- Rs. 40</span>
                </div>
                <div className="price-breakdown b-btm">
                    <span>Delivery Charges</span>
                    <span className="c-green">FREE</span>
                </div>
                <div className="price-breakdown total-amount b-btm">
                    <span>Total Amount</span>
                    <span>Rs. {total - 40}</span>
                </div>
                <button className="btn btn-black">
                    PLACE ORDER
                </button>
            </div>
        </div>
    )
}

export default PriceTotal
