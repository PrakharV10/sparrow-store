import React from 'react'
import { useNavigate } from 'react-router';
import { useAuth, useCart} from '../../Context/context'
import { serverRemoveFromWishlist } from '../../utils/wishlist.util';
import notifyToast from '../Toast/notifyToast';
import './WishCard.css'

function WishCard({ wish , setWishlistItems, wishlistItems }) {
    
    const { cartDispatch } = useCart();
    const { authState: { currentUserId } } = useAuth();
    const navigate = useNavigate();

    function cardClickHandle() {
        navigate(`/products/${wish._id}`)
    }

    async function handleDeleteWish(e) {
        e.stopPropagation();
        notifyToast('REMOVING FROM WISHLIST')
        await serverRemoveFromWishlist(currentUserId, cartDispatch, wish)
        setWishlistItems(wishlistItems.filter((one) => one._id !== wish._id))
    }

    return (
        <div
            onClick={cardClickHandle}
            className="cards">
            <div className="cards-img">
                <img src="https://rukminim1.flixcart.com/image/416/416/kn22m4w0/mobile/9/k/s/galaxy-f12-sm-f127glbiins-samsung-original-imagftmhhhvghq7w.jpeg?q=70" alt="cards-pic"/>
            </div>
            <button
                onClick = {(e) => handleDeleteWish(e)}
                className="cross-btn">
                <svg width="1em" height="1em" viewBox="0 0 36 36"><path className="clr-i-outline clr-i-outline-path-1" d="M19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41z"></path></svg>
            </button>
            <div className="brand">
                Apple
            </div>
            <div className="item-name">
                {wish.name}
            </div>
            <div className="item-price">
                <span className="now">
                    Rs. {wish.price}
                </span>
            </div>
        </div>
    )
}

export default WishCard
