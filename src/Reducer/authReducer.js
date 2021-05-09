const SAVE_LOGIN_SIGNUP_DETAILS = "SAVE_LOGIN_SIGNUP_DETAILS";
const CHECK_LOGIN_ON_STARTUP = "CHECK_LOGIN_ON_STARTUP";

export function authReducer(state, { type, payload }) {
    switch (type) {
        case SAVE_LOGIN_SIGNUP_DETAILS:
            localStorage.setItem("Login", JSON.stringify({isUserLoggedIn : true, userId : payload._id}))
            return {...state, isUserLoggedIn : true, currentUserId : payload._id, username : payload.username, email : payload.email, password : payload.password }

        case CHECK_LOGIN_ON_STARTUP:
            return { ...state, isUserLoggedIn: true, currentUserId: payload._id, username : payload.username, email : payload.email, password : payload.password }
        
        default:
            return state
    }
}

export const initialAuthState = {
    isUserLoggedIn: false,
    currentUserId: null,
    username: null,
    email: null,
    password: null
}