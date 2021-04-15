import React from 'react'
import { useParams } from 'react-router';
import { useCart, useToast } from '../../Context/context'
import './ProductShot.css'

function ProductShot() {

    const { state,dispatch } = useCart();
    const { toast, setToast } = useToast();
    const { id } = useParams();
    
    const current = state.data.find(one => one.id === id);

    function searchWishList() {
        if (state.wishList.filter((wish) => wish.id === current.id).length === 0) {
            return false
        }return true
    }

    function wishListToggle(e) {
        e.stopPropagation()
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
    }

    return (
        <div className="product-shot">
            <img src="https://rukminim1.flixcart.com/image/416/416/kfzq8i80/mobile/y/j/f/samsung-galaxy-f41-sm-f415fzbdins-original-imafwbnpvwszuysz.jpeg?q=70" alt="shot" />
            <button className="heart-button" onClick={(e) => wishListToggle(e)}>
                <svg className={searchWishList() === true ? "heart-red" : ""} width="1em" height="1em" viewBox="0 0 16 16"><g><path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15C-7.534 4.736 3.562-3.248 8 1.314z"></path></g></svg>
            </button>
        </div>
    )
}

export default ProductShot
