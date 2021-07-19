import React, { useEffect, useState } from 'react';
import { useCart } from '../../Context';
import './SideBar.css';

function SideBar() {
	const { cartState, cartDispatch } = useCart();
	const [brands, setBrands] = useState([]);

	function getBrands(products) {
		const brands = products.reduce((acc, curr) => {
			acc.push(curr.brand);
			return acc;
		}, []);

		return brands;
	}

	function brandClickHandler(brand) {
		if (cartState.brandName.find((one) => one === brand))
			cartDispatch({ type: 'REMOVE_BRAND', payload: brand });
		else cartDispatch({ type: 'ADD_BRAND', payload: brand });
	}

	useEffect(() => {
		setBrands(getBrands(cartState.data));
	}, [cartState.data]);

	return (
		<aside className='side-bar'>
			<div className='check-list'>
				<div className='one-category'>
					<div className='list-title'>PRICE</div>
				</div>
				<div className='checkbox'>
					<label htmlFor='radio-1'>
						<input
							onChange={() => cartDispatch({ type: 'SORT', payload: 'HIGH_TO_LOW' })}
							checked={cartState.sortBy === 'HIGH_TO_LOW'}
							id='radio-1'
							name='radio'
							type='radio'
						/>
						High to Low
					</label>
					<label htmlFor='radio-2'>
						<input
							onChange={() => cartDispatch({ type: 'SORT', payload: 'LOW_TO_HIGH' })}
							checked={cartState.sortBy === 'LOW_TO_HIGH'}
							id='radio-2'
							name='radio'
							type='radio'
						/>
						Low to High
					</label>
				</div>
				<div className='one-category'>
					<div className='check-title'>AVAILABILITY</div>
					<div className='checkbox'>
						<label htmlFor='checkbox-1'>
							<input
								onChange={() => cartDispatch({ type: 'TOGGLE_STOCK' })}
								checked={cartState.outOfStock === true}
								id='checkbox-1'
								name='checkbox'
								type='checkbox'
							/>
							Include Out of Stock
						</label>
						<label htmlFor='checkbox-2'>
							<input
								onChange={() => cartDispatch({ type: 'TOGGLE_DELIVERY' })}
								checked={cartState.fastDelivery === true}
								id='checkbox-2'
								name='checkbox'
								type='checkbox'
							/>
							Fast Delivery Only
						</label>
					</div>
				</div>

				<div className='one-category'>
					<div className='check-title'>BRANDS</div>
					<div className='checkbox'>
						{brands.map((brand, index) => {
							return (
								<label key={`${brand}-${index}`} htmlFor={`checkbox-b-${index}`}>
									<input
										checked={
											cartState.brandName.find((one) => one === brand)
												? true
												: false
										}
										onChange={() => brandClickHandler(brand)}
										id={`checkbox-b-${index}`}
										name='checkbox'
										type='checkbox'
									/>
									{brand}
								</label>
							);
						})}
					</div>
				</div>
			</div>
		</aside>
	);
}

export default SideBar;
