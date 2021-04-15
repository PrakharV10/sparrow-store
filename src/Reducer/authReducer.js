const SAVE_LOGIN_DETAILS = "SAVE_LOGIN_DETAILS";
const CHECK_LOGIN_ON_STARTUP = "CHECK_LOGIN_ON_STARTUP";

export function authReducer(state, {type, payload}){
    switch (type) {
        case SAVE_LOGIN_DETAILS:
            localStorage.setItem("Login", JSON.stringify({isUserLoggedIn : true, userId : payload}))
            return {...state, isUserLoggedIn : true, currentUserId : payload}

        case CHECK_LOGIN_ON_STARTUP:
            return { ...state, isUserLoggedIn: payload.isUserLoggedIn, currentUserId: payload.userId }
        
        default:
            return state
    }
}

export const initialAuthState = {
    isUserLoggedIn: false,
    currentUserId : null
}