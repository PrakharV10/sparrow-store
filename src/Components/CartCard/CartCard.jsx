import React from 'react'
import { useNavigate } from 'react-router';
import { useCart } from '../../Context/context'
import './CartCard.css'

function CartCard({product}) {

    const { dispatch } = useCart();
    const navigate = useNavigate();

    function quantityHandler(e,oprn) {
        e.stopPropagation();
        if (product.qty > 1 && oprn=== "sub")
            dispatch({type : "DECREASE_CART_ITEM_QUANTITY", payload: product})
        else if(oprn === "add")
            dispatch({type : "INCREASE_CART_ITEM_QUANTITY", payload: product})
        else
            dispatch({type: "REMOVE_FROM_CART", payload : product})
        
    }

    function cardClickHandle() {
        navigate(`/products/${product.id}`)
    }

    return (
        <div className="cart-card">
            <div
                onClick = {cardClickHandle}
                className="card-image">
                <img src="https://rukminim1.flixcart.com/image/416/416/kfzq8i80/mobile/y/j/f/samsung-galaxy-f41-sm-f415fzbdins-original-imafwbnpvwszuysz.jpeg?q=70" alt="" />
            </div>
            <div className="card-details">
                <div className="brand">
                    Apple
                </div>
                <div className="name">
                    {product.name}
                </div>
                <div className="description">
                    {product.desc}
                </div>
                <div className="quantity-group">
                    <button onClick={(e) => quantityHandler(e,"sub")}>
                        {
                            product.qty === 1 ? <svg width="1em" height="1em" viewBox="0 0 48 48"><g fill="none"><path d="M24 7.25a5.75 5.75 0 0 1 5.746 5.53l.004.22H37a1.25 1.25 0 0 1 .128 2.493L37 15.5h-1.091l-1.703 22.57A4.25 4.25 0 0 1 29.968 42H18.032a4.25 4.25 0 0 1-4.238-3.93L12.09 15.5H11a1.25 1.25 0 0 1-1.244-1.122l-.006-.128c0-.647.492-1.18 1.122-1.243L11 13h7.25A5.75 5.75 0 0 1 24 7.25zm9.402 8.25H14.598l1.69 22.382a1.75 1.75 0 0 0 1.744 1.618h11.936a1.75 1.75 0 0 0 1.745-1.618l1.69-22.382zm-6.152 5.25c.647 0 1.18.492 1.244 1.122L28.5 22v11a1.25 1.25 0 0 1-2.494.128L26 33V22c0-.69.56-1.25 1.25-1.25zm-6.5 0c.647 0 1.18.492 1.244 1.122L22 22v11a1.25 1.25 0 0 1-2.494.128L19.5 33V22c0-.69.56-1.25 1.25-1.25zm3.25-11a3.25 3.25 0 0 0-3.245 3.066L20.75 13h6.5A3.25 3.25 0 0 0 24 9.75z" fill="currentColor"></path></g></svg>: <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M5 11h14v2H5z" ></path></svg>
                        }
                    </button>
                    {product.qty}
                    <button onClick = {(e) => quantityHandler(e,"add")}>
                        <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" ></path></svg>
                    </button>
                </div>
                <div className="price">
                    Rs. {product.price}
                </div>
            </div>
        </div>
    )
}

export default CartCard
