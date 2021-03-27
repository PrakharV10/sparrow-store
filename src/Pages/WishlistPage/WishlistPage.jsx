import React from 'react'
import WishCard from '../../Components/WishCard/WishCard';
import { useCart } from '../../Context/Cart-Context'
import './wishlistPage.css'

function WishlistPage() {

    const { state } = useCart();

    return (
        <div className="wishlist-page">
            <div className="head">
                Your Wishlist
            </div>
            <div className="wishlist">
                <div className="wish-grid">
                    {
                        state.wishList.map(wish => {
                            return (
                                <div key={wish.id}>
                                    <WishCard wish={wish}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default WishlistPage
