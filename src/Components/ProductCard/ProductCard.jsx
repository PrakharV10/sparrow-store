import React from 'react'
import { useNavigate } from 'react-router';
import { useAuth, useCart } from '../../Context/context'
import './ProductCard.css'
import notifyToast from '../Toast/notifyToast';
import axios from 'axios';

function ProductCard({ product, setAuthModal }) {

    const navigate = useNavigate();
    const { cartState, cartDispatch } = useCart();
    const { authState: { isUserLoggedIn, currentUserId } } = useAuth();

    function searchWishList() {
        if (cartState.wishList.find((wish) => wish === product._id)) {
            return true
        }return false
    }

    async function serverAddToWishlist() {
        const { data : {success, wishlist, message} } = await axios.post(`https://Sparrow-Store.prakhar10v.repl.co/wishlist/${currentUserId}`, {
            productId: product._id
        })
        if (success === true) {
            notifyToast("ADDED TO WISHLIST")
            cartDispatch({ type : "ADD_TO_WISHLIST", payload : wishlist})
        } else {
            notifyToast(message)
        }
    }

    async function serverRemoveFromWishlist() {
        const { data : {success, wishlist, message} } = await axios.delete(`https://Sparrow-Store.prakhar10v.repl.co/wishlist/${currentUserId}`, {
            data: {
                productId: product._id
            }
        })
        if (success === true) {
            notifyToast("REMOVED FROM WISHLIST")
            cartDispatch({ type : "REMOVE_FROM_WISHLIST", payload : wishlist})
        } else {
            notifyToast(message)
        }
    }
    
    function wishListToggle(e) {
        e.stopPropagation()
        if (isUserLoggedIn) {
            if (searchWishList() === true) {
                notifyToast("REMOVING FROM WISHLIST")
                serverRemoveFromWishlist()
            } else {
                notifyToast("ADDING TO WISHLIST")
                serverAddToWishlist()                
            }   
        } else {
            setAuthModal(true)
        }
    }

    function cardClickHandle() {
        navigate(`/products/${product.id}`)
    }


    return (
        <div
            className={product.inStock ? "cards" : "cards no-stock"}
            onClick={cardClickHandle}
        >
            <div className="cards-img">
                <img src="https://rukminim1.flixcart.com/image/416/416/kn22m4w0/mobile/9/k/s/galaxy-f12-sm-f127glbiins-samsung-original-imagftmhhhvghq7w.jpeg?q=70" alt="cards-pic" />
            </div>
            <button onClick={(e) => wishListToggle(e)} className="wishlist-ico">
                {searchWishList() === true
                    ?
                    <svg width="1em" height="1em" viewBox="0 0 16 16"><g ><path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15C-7.534 4.736 3.562-3.248 8 1.314z"></path></g></svg>
                    :
                    <svg viewBox="0 0 16 16"><g><path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385c.92 1.815 2.834 3.989 6.286 6.357c3.452-2.368 5.365-4.542 6.286-6.357c.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path></g></svg>}
            </button>
            
            <div className="brand">
                {product.brand}
            </div>
            <div className="item-name">
                {product.name}
            </div>
            <div className="item-price">
                <span className="now">
                    Rs. {product.price}
                </span>
            </div>
        </div>
    )
}

export default ProductCard
