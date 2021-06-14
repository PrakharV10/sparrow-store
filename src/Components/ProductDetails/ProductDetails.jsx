import React from 'react';
import { useNavigate } from 'react-router';
import { useAuth, useCart } from '../../Context';
import { searchCart, serverAddToCart } from '../../utils/cart.util';
import notifyToast from '../Toast/notifyToast';

import './ProductDetails.css';

function ProductDetails({ product }) {
	const { cartState, cartDispatch } = useCart();
	const {
		authState: { currentUserId },
	} = useAuth();
	const navigate = useNavigate();

	function cartButtonHandler() {
		if (searchCart(cartState, product) === false) {
			serverAddToCart(currentUserId, cartDispatch, product);
			notifyToast('ADDING TO CART');
		} else {
			navigate('/cart');
		}
	}

	return (
		<div className="product-details">
			<div className="product-name">{product.name}</div>
			<div className="product-rating">{product.ratings} reviews</div>
			<div className="product-price">${product.price}</div>
			<div className="product-brand">
				Brand : <span className="gray-text">{product.brand}</span>
			</div>
			<div className="stock">
				Availability :{' '}
				<span className="gray-text">
					{product.inStock === true ? `In Stock` : 'Out of Stock'}
				</span>
			</div>
			<div className="product-text">
				Description : <div className="gray-text">{product.desc}</div>
			</div>
			{product.inStock === true ? (
				<button onClick={cartButtonHandler} className="btn btn-black">
					{searchCart(cartState, product) === false ? `ADD TO CART` : `GO TO CART`}
				</button>
			) : (
				<button className="btn btn-disabled">ADD TO CART</button>
			)}
		</div>
	);
}

export default ProductDetails;
