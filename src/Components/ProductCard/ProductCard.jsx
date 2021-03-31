import React from 'react'
import { useCart, useCurrProduct, useRoute, useToast } from '../../Context/Cart-Context'
import './ProductCard.css'

function ProductCard({ product }) {

    const { toast, setToast } = useToast();
    
    const { state, dispatch } = useCart();
    const { setCurrent } = useCurrProduct();
    const { setRoute } = useRoute();

    function searchWishList() {
        if (state.wishList.filter((wish) => wish.id === product.id).length === 0) {
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
            dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product })
        } else {
            setToast({ ...toast, action: "Add", show: true })
            setTimeout(() => {
                setToast({...toast, action : "Add", show:false})
            },2000)
            dispatch({ type : "ADDTOWISHLIST", payload : product })
        }
    }

    function cardClickHandle() {
        setCurrent(product)
        setRoute("Product-Description")
    }


    return (
        <div
            className={product.inStock ? "cards" : "cards no-stock"}
            onClick={cardClickHandle}
        >
            <div className="cards-img">
                <img src={product.image} alt="cards-pic" />
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
                <span className="before">
                    
                </span>
            </div>
        </div>
    )
}

export default ProductCard
