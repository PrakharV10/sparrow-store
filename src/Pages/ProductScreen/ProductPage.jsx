import React, { useState } from 'react';
import { SideBar, BreadCrumb, ProductList } from '../../Components';
import { useLoading, ThreeDots } from '@agney/react-loading';
import './ProductPage.css';

function ProductPage() {
	const [loading, setLoading] = useState(true);

	const { containerProps, indicatorEl } = useLoading({
		loading: loading,
		indicator: <ThreeDots width="50" />,
	});

	return (
		<div className="common-wrapper">
			<BreadCrumb />
			<div className="product-page">
				<SideBar />
				<div className="product-container">
					<div className="head">Products</div>
					{loading && (
						<section className="product-loader" {...containerProps}>
							{indicatorEl}
						</section>
					)}
					<ProductList setLoading={setLoading} />
				</div>
			</div>
		</div>
	);
}

export default ProductPage;
