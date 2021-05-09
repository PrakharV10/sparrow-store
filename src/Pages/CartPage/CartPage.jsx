import React from 'react'
import CartCard from '../../Components/CartCard/CartCard';
import EmptyCart from '../../Components/EmptyCart/EmptyCart';
import Pagination from '../../Components/Pagination/Pagination';
import PriceTotal from '../../Components/PriceTotal/PriceTotal';
import { useCart } from '../../Context/context'
import './CartPage.css'

function CartPage() {

    const { cartState } = useCart();


    return (
        <div className="common-wrapper">
            <Pagination />
            <div className="cart-page">
                {
                    cartState.cart.length !== 0 ?
                        <>
                            <div className="cart-container">
                            <div className="head">
                                My Cart ({cartState.cart.length})
                            </div>
                            <div className="cart-list">
                                {
                                    cartState.cart.map(product => {
                                        return (
                                            <div key={product.id}>
                                                <CartCard product={product}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            </div>
                            <PriceTotal />
                        </>
                        :
                        <EmptyCart />
                }
            </div>
        </div>
    )
}

export default CartPage
