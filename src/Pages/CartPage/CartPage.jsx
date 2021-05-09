import React, { useEffect, useState } from 'react'
import CartCard from '../../Components/CartCard/CartCard';
import EmptyCart from '../../Components/EmptyCart/EmptyCart';
import Pagination from '../../Components/Pagination/Pagination';
import PriceTotal from '../../Components/PriceTotal/PriceTotal';
import { useAuth, useCart } from '../../Context/context'
import { getPopulatedCart } from '../../utils/cart.util';
import { useLoading, ThreeDots } from '@agney/react-loading';
import './CartPage.css'

function CartPage() {

    const { cartState } = useCart();
    const { authState: { currentUserId } } = useAuth();
    const [loading, setLoading] = useState(true)
    const [cartItems, setCartItems] = useState([])


    useEffect(() => {
        getPopulatedCart(currentUserId, setLoading)
            .then(response => {
            setCartItems(response)
        })
    }, [])

    const { containerProps, indicatorEl } = useLoading({
        loading: loading,
        indicator: <ThreeDots width="50" />
    });


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
                            {loading && <section className='product-loader desc-loader' {...containerProps}>{indicatorEl}</section>}
                                {!loading && <div className="cart-list">
                                    {
                                        cartItems.map(one => {
                                            return (
                                                <div key={one._id}>
                                                    <CartCard cartItems = {cartItems} setCartItems={setCartItems} quantity = {one.quantity} product={one.product} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>}
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
