import { ThreeDots, useLoading } from '@agney/react-loading';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductShot, ProductDetails } from '../../Components';
import { useCart, useIsLoading } from '../../Context';
import './ProductDesc.css';

function ProductDesc() {
	const { productId } = useParams();
	const { isLoading } = useIsLoading();
	const { cartState } = useCart();

	const current = cartState.data.find((item) => item._id === productId);

	const { containerProps, indicatorEl } = useLoading({
		loading: isLoading,
		indicator: <ThreeDots width="50" />,
	});

	return (
		<div className="common-wrapper">
			{!isLoading && (
				<div className="breadcrumb">
					<Link to="/">Home</Link>
					{' | '}
					{current.name}
				</div>
			)}

			{isLoading && (
				<section className="product-loader desc-loader" {...containerProps}>
					{indicatorEl}
				</section>
			)}
			{!isLoading && (
				<div className="product-desc">
					<div className="container">
						<ProductShot product={current} />
						<ProductDetails product={current} />
					</div>
				</div>
			)}
		</div>
	);
}

export default ProductDesc;
