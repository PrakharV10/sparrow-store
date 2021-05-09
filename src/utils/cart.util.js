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

export async function getPopulatedCart(currentUserId, setLoading) {
    const { data: { success, cart, message } } = await axios.get(`https://Sparrow-Store.prakhar10v.repl.co/cart/${currentUserId}`)
    if (success) {
        setLoading(false)
        return cart
    } else {
        alert(message)
    }
}

export async function updateCartItemQuantity(currentUserId, cartDispatch, product, action) {
    notifyToast("UPDATING QUANTITY")
    const { data: { success, message, cart } } = await axios.put(`https://Sparrow-Store.prakhar10v.repl.co/cart/${currentUserId}`, {
        productId: product._id,
        action : action
    })
    if (success) {
        cartDispatch({type : "CHANGE_CART_ITEM_QUANTITY", payload : cart})
    } else {
        alert(message)
    }
}

export async function deleteCartItem(currentUserId, cartDispatch, product) {
    const { data: { success, message, cart } } = await axios.delete(`https://Sparrow-Store.prakhar10v.repl.co/cart/${currentUserId}`, {
        data: {
            productId : product._id
        }
    })
    if (success) {
        cartDispatch({type : "REMOVE_FROM_CART", payload : cart})
    } else {
        alert(message)
    }
}