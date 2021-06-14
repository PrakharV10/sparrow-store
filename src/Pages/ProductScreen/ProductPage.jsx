import React from 'react';
import { SideBar, BreadCrumb, ProductList } from '../../Components';
import { useLoading, ThreeDots } from '@agney/react-loading';
import './ProductPage.css';
import { useIsLoading } from '../../Context';

function ProductPage() {
	const { isLoading } = useIsLoading();

	const { containerProps, indicatorEl } = useLoading({
		loading: isLoading,
		indicator: <ThreeDots width="50" />,
	});

	return (
		<div className="common-wrapper">
			<BreadCrumb />
			<div className="product-page">
				<SideBar />
				<div className="product-container">
					<div className="head">Products</div>
					{isLoading && (
						<section className="product-loader" {...containerProps}>
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
