import React from 'react'
import { useCart } from '../../Context/Cart-Context'
import './PriceTotal.css'

function PriceTotal() {

    const { state } = useCart();

    return (
        <div className="price-total">
            <div>
                <div className="total-title">
                    PRICE DETAILS
                </div>
                <div className="price-breakdown">
                    <span>Price ({state.cart.length} Item)</span>
                    <span>Rs. 999</span>
                </div>
                <div className="price-breakdown">
                    <span>Discount</span>
                    <span className="c-green">- Rs. 400</span>
                </div>
                <div className="price-breakdown b-btm">
                    <span>Delivery Charges</span>
                    <span className="c-green">FREE</span>
                </div>
                <div className="price-breakdown total-amount b-btm">
                    <span>Total Amount</span>
                    <span>Rs. 599</span>
                </div>
                <button className="btn btn-black">
                    PLACE ORDER
                </button>
            </div>
        </div>
    )
}

export default PriceTotal
