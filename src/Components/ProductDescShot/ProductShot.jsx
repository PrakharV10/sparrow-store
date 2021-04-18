import React, { useState } from 'react'
import { useParams } from 'react-router';
import { useAuth, useCart, useToast } from '../../Context/context'
import AuthModal from '../AuthModal/AuthModal';
import './ProductShot.css'

function ProductShot() {

    const { state,dispatch } = useCart();
    const { toast, setToast } = useToast();
    const { state: { isUserLoggedIn } } = useAuth();
    const { id } = useParams();
    const [authModal, setAuthModal] = useState(false)
    
    const current = state.data.find(one => one.id === id);

    function searchWishList() {
        if (state.wishList.filter((wish) => wish.id === current.id).length === 0) {
            return false
        }return true
    }

    function wishListToggle(e) {
        e.stopPropagation()
        if (isUserLoggedIn) {
            if (searchWishList() === true) {
                setToast({ ...toast, action: "Remov", show: true })
                setTimeout(() => {
                    setToast({...toast, action : "Remov", show:false})
                },2000)
                dispatch({ type: "REMOVE_FROM_WISHLIST", payload: current })
            } else {
                setToast({ ...toast, action: "Add", show: true })
                setTimeout(() => {
                    setToast({...toast, action : "Add", show:false})
                },2000)
                dispatch({ type : "ADDTOWISHLIST", payload : current })
            }   
        } else {
            setAuthModal(true);
        }
    }

    return (
        <div className="product-shot">
            <img src="https://rukminim1.flixcart.com/image/416/416/kfzq8i80/mobile/y/j/f/samsung-galaxy-f41-sm-f415fzbdins-original-imafwbnpvwszuysz.jpeg?q=70" alt="shot" />
            <button className="heart-button" onClick={(e) => wishListToggle(e)}>
                <svg className={searchWishList() === true ? "heart-red" : ""} width="1em" height="1em" viewBox="0 0 16 16"><g><path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15C-7.534 4.736 3.562-3.248 8 1.314z"></path></g></svg>
            </button>
            {authModal && <AuthModal authModal={authModal} setAuthModal={setAuthModal} />}
        </div>
    )
}

export default ProductShot
