import React from 'react'
import EmptyWish from '../../Components/EmptyWish/EmptyWish';
import Pagination from '../../Components/Pagination/Pagination';
import WishCard from '../../Components/WishCard/WishCard';
import { useCart } from '../../Context/context'
import './wishlistPage.css'

function WishlistPage() {

    const { cartState } = useCart();

    return (
        <div className="common-wrapper">
            <Pagination />
            <div className="wishlist-page">
                {cartState.wishList.length !== 0 &&
                    <>
                        <div className="head">
                        Your Wishlist
                        </div>
                        <div className="wishlist">
                            <div className="wish-grid">
                                {
                                    cartState.wishList.map(wish => {
                                        return (
                                            <div key={wish.id}>
                                                <WishCard wish={wish} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </>
                }
                {cartState.wishList.length === 0 && <EmptyWish />}
            </div>
        </div>
    )
}

export default WishlistPage
