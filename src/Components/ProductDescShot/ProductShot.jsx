import React, { useState } from 'react';
import { useAuth, useCart } from '../../Context';
import {
	searchWishList,
	serverAddToWishlist,
	serverRemoveFromWishlist,
} from '../../utils/wishlist.util';
import { AuthModal } from '..';
import notifyToast from '../Toast/notifyToast';
import './ProductShot.css';

function ProductShot({ product }) {
	const { cartState, cartDispatch } = useCart();
	const {
		authState: { isUserLoggedIn },
	} = useAuth();
	const [authModal, setAuthModal] = useState(false);

	function wishListToggle(e) {
		e.stopPropagation();
		if (isUserLoggedIn) {
			if (searchWishList(cartState, product) === true) {
				notifyToast('REMOVING FROM WISHLIST');
				serverRemoveFromWishlist(cartDispatch, product);
			} else {
				notifyToast('ADDING TO WISHLIST');
				serverAddToWishlist(cartDispatch, product._id);
			}
		} else {
			setAuthModal(true);
		}
	}

	return (
		<div className="product-shot">
			<img
				src="https://rukminim1.flixcart.com/image/416/416/kfzq8i80/mobile/y/j/f/samsung-galaxy-f41-sm-f415fzbdins-original-imafwbnpvwszuysz.jpeg?q=70"
				alt="shot"
			/>
			<button className="heart-button" onClick={(e) => wishListToggle(e)}>
				<svg
					className={searchWishList(cartState, product) === true ? 'heart-red' : ''}
					width="1em"
					height="1em"
					viewBox="0 0 16 16"
				>
					<g>
						<path
							fillRule="evenodd"
							d="M8 1.314C12.438-3.248 23.534 4.735 8 15C-7.534 4.736 3.562-3.248 8 1.314z"
						></path>
					</g>
				</svg>
			</button>
			{authModal && <AuthModal authModal={authModal} setAuthModal={setAuthModal} />}
		</div>
	);
}

export default ProductShot;
