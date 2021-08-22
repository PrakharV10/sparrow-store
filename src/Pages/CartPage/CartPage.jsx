import React from 'react';
import { BreadCrumb, CartCard, PriceTotal, EmptyCart } from '../../Components';
import { useCart, useIsLoading } from '../../Context';
import { useLoading, ThreeDots } from '@agney/react-loading';
import './CartPage.css';

function CartPage() {
	const { cartState } = useCart();
	const { isLoading } = useIsLoading();

	const cartItems = cartState.cart;

	const { containerProps, indicatorEl } = useLoading({
		loading: isLoading,
		indicator: <ThreeDots width='50' />,
	});

	return (
		<div className='common-wrapper'>
			<BreadCrumb />
			<div className='cart-page'>
				{cartState.cart && cartState.cart.length !== 0 ? (
					<>
						<div className='cart-container'>
							<div className='head'>
								My Cart ({cartState.cart ? cartState.cart.length : '0'})
							</div>
							{isLoading && (
								<section className='product-loader desc-loader' {...containerProps}>
									{indicatorEl}
								</section>
							)}
							{!isLoading && (
								<div className='cart-list'>
									{cartItems.map((one) => {
										return (
											<div key={one.product._id}>
												<CartCard
													quantity={one.quantity}
													currentProduct={one.product}
												/>
											</div>
										);
									})}
								</div>
							)}
						</div>
						<PriceTotal />
					</>
				) : (
					<EmptyCart />
				)}
			</div>
		</div>
	);
}

export default CartPage;
