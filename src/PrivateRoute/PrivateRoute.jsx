import React from 'react';
import { Navigate, Route } from 'react-router';
import { useAuth } from '../Context';

function PrivateRoute({ path, ...props }) {
	const {
		authState: { isUserLoggedIn },
	} = useAuth();

	return isUserLoggedIn ? (
		<Route path={path} {...props} />
	) : (
		<Navigate state={{ from: path }} replace to="/login" />
	);
}

export default PrivateRoute;
