import React from 'react';
import { WishCard, BreadCrumb, EmptyWish } from '../../Components';
import { useCart, useIsLoading } from '../../Context';
import { useLoading, ThreeDots } from '@agney/react-loading';
import './wishlistPage.css';

function WishlistPage() {
	const { isLoading } = useIsLoading();

	const { cartState } = useCart();

	const { containerProps, indicatorEl } = useLoading({
		loading: isLoading,
		indicator: <ThreeDots width='50' />,
	});

	const wishlistItems = cartState.wishList;

	return (
		<div className='common-wrapper'>
			<BreadCrumb />
			<div className='wishlist-page'>
				<div className='head'>Your Wishlist</div>
				{isLoading && (
					<section className='product-loader desc-loader' {...containerProps}>
						{indicatorEl}
					</section>
				)}
				{wishlistItems.length !== 0 && (
					<div className='wishlist'>
						{!isLoading && (
							<div className='wish-grid'>
								{wishlistItems.map((wish) => {
									return (
										<div key={wish._id}>
											<WishCard wish={wish} />
										</div>
									);
								})}
							</div>
						)}
					</div>
				)}
				{wishlistItems.length === 0 && <EmptyWish />}
			</div>
		</div>
	);
}

export default WishlistPage;
