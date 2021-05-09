import axios from "axios"
import notifyToast from "../Components/Toast/notifyToast"

export function searchWishList(cartState, product) {
    if (cartState.wishList.find((wish) => wish === product._id)) {
        return true
    }return false
}

export async function serverAddToWishlist(currentUserId, cartDispatch, product) {
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

export async function serverRemoveFromWishlist(currentUserId, cartDispatch, product) {
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

