import React from 'react';
import { SideBar, BreadCrumb, ProductList } from '../../Components';
import { useLoading, ThreeDots } from '@agney/react-loading';
import './ProductPage.css';
import { useCart, useIsLoading } from '../../Context';

function ProductPage() {
	const { isLoading } = useIsLoading();
	const { cartState, cartDispatch } = useCart();

	const { containerProps, indicatorEl } = useLoading({
		loading: isLoading,
		indicator: <ThreeDots width='50' />,
	});

	return (
		<div className='common-wrapper'>
			<BreadCrumb />
			<div className='product-page'>
				<SideBar />
				<div className='product-container'>
					<div className='head'>
						<div className='head-keyword'>
							{cartState.searchKeyWord.length === 0
								? `PRODUCTS`
								: `You Searched ${cartState.searchKeyWord}`}
						</div>
						{cartState.searchKeyWord.length !== 0 && (
							<div
								onClick={() => cartDispatch({ type: 'CLEAR_SEARCH' })}
								className='clear-btn'
							>
								Clear Search
							</div>
						)}
					</div>
					{isLoading && (
						<section className='product-loader' {...containerProps}>
							{indicatorEl}
						</section>
					)}
					<ProductList />
				</div>
			</div>
		</div>
	);
}

export default ProductPage;
