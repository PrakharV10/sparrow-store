import axios from "axios"
import notifyToast from "../Components/Toast/notifyToast"

export function searchCart(cartState, product) {
    if (cartState && cartState.cart.find(item => item.product === product._id))
        return true
    return false
}

export async function serverAddToCart(currentUserId, cartDispatch, product) {
    const { data: { success, message, cart } } = await axios.post(`https://Sparrow-Store.prakhar10v.repl.co/cart/${currentUserId}`, {
        productId: product._id
    })
    if (success === true) {
        notifyToast("ADDED TO CART")
        cartDispatch({ type : "ADD_TO_CART", payload : cart})
    } else {
        notifyToast(message)
    }
}