import React from 'react'
import { Navigate, Route } from 'react-router';
import { useAuth } from '../Context/context'

function PrivateRoute({ path, ...props }) {
    
    const { state: { isUserLoggedIn } } = useAuth();

    return (
        isUserLoggedIn
            ?
            <Route path={path} {...props} />
            :
            <Navigate
                state={{ from: path }}
                replace
                to = "/login"
            />
    )
}

export default PrivateRoute
