import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import './breadcrumb.css';

function BreadCrumb() {
	const { pathname } = useLocation();

	return (
		<div className="breadcrumb">
			<Link to="/">Home</Link>
			{` `}|{'  '}
			<Link to={pathname}>{pathname.substr(1)}</Link>
		</div>
	);
}

export default BreadCrumb;
