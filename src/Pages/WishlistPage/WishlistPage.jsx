import React from 'react'
import EmptyWish from '../../Components/EmptyWish/EmptyWish';
import Pagination from '../../Components/Pagination/Pagination';
import WishCard from '../../Components/WishCard/WishCard';
import { useCart } from '../../Context/Cart-Context'
import './wishlistPage.css'

function WishlistPage() {

    const { state } = useCart();

    return (
        <div className="common-wrapper">
            <Pagination />
            <div className="wishlist-page">
                {state.wishList.length !== 0 &&
                    <>
                        <div className="head">
                        Your Wishlist
                        </div>
                        <div className="wishlist">
                            <div className="wish-grid">
                                {
                                    state.wishList.map(wish => {
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
                {state.wishList.length === 0 && <EmptyWish />}
            </div>
        </div>
    )
}

export default WishlistPage
