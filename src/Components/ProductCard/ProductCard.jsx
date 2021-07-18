import React from 'react';
import { useNavigate } from 'react-router';
import { useAuth, useCart } from '../../Context';
import './ProductCard.css';
import notifyToast from '../Toast/notifyToast';
import {
	searchWishList,
	serverAddToWishlist,
	serverRemoveFromWishlist,
} from '../../utils/wishlist.util';

function ProductCard({ product, setAuthModal }) {
	const navigate = useNavigate();
	const { cartState, cartDispatch } = useCart();
	const {
		authState: { isUserLoggedIn },
	} = useAuth();

	function wishListToggle(e) {
		e.stopPropagation();
		if (isUserLoggedIn) {
			if (searchWishList(cartState, product) === true) {
				notifyToast('REMOVING FROM WISHLIST');
				serverRemoveFromWishlist(cartDispatch, product);
			} else {
				notifyToast('ADDING TO WISHLIST');
				serverAddToWishlist(cartDispatch, product);
			}
		} else {
			setAuthModal(true);
		}
	}

	function cardClickHandle() {
		navigate(`/products/${product._id}`);
	}

	return (
		<div className='cards' onClick={cardClickHandle}>
			<div className='cards-img'>
				<img src={product.image} alt='cards-pic' />
			</div>
			<button onClick={(e) => wishListToggle(e)} className='wishlist-ico'>
				{searchWishList(cartState, product) === true ? (
					<svg width='1em' height='1em' viewBox='0 0 16 16'>
						<g>
							<path
								fillRule='evenodd'
								d='M8 1.314C12.438-3.248 23.534 4.735 8 15C-7.534 4.736 3.562-3.248 8 1.314z'
							></path>
						</g>
					</svg>
				) : (
					<svg viewBox='0 0 16 16'>
						<g>
							<path d='M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385c.92 1.815 2.834 3.989 6.286 6.357c3.452-2.368 5.365-4.542 6.286-6.357c.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z'></path>
						</g>
					</svg>
				)}
			</button>

			<div className='brand'>
				{product.brand}
				<span className={product.inStock ? 'in-stock' : 'no-stock'}>Out of Stock</span>
			</div>
			<div className='item-name'>{product.name}</div>
			<div className='item-price'>
				<span className='now'>Rs. {product.price}</span>
			</div>
		</div>
	);
}

export default ProductCard;
