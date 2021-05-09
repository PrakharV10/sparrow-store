import { toast } from "react-toastify"

function notifyToast(text) {
    return toast.dark(text, {
        position: toast.POSITION.BOTTOM_RIGHT,
    })
}

export default notifyToast
