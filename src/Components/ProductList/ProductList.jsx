import React, { useState } from 'react';
import { useCart } from '../../Context';
import './ProductList.css';
import { AuthModal, ProductCard } from '..';
import { getFiltered, getFilteredBrands, getSorted, searchFilter } from './utils/utils';

function ProductList() {
	const { cartState } = useCart();
	const [authModal, setAuthModal] = useState(false);

	const searchedData = searchFilter(cartState.data, cartState.searchKeyWord);
	const sortedData = getSorted(searchedData, cartState.sortBy);
	const filteredData = getFiltered(sortedData, cartState.fastDelivery, cartState.outOfStock);
	const filteredbrands = getFilteredBrands(filteredData, cartState.brandName);

	return (
		<div className='product-list'>
			<div className='product-display'>
				{filteredbrands.slice(0, 12).map((product) => {
					return (
						<div key={product._id}>
							<ProductCard setAuthModal={setAuthModal} product={product} />
							{authModal && (
								<AuthModal authModal={authModal} setAuthModal={setAuthModal} />
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ProductList;
