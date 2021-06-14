import React, { useState } from 'react';
import { useCart } from '../../Context';
import './SideBar.css';

function SideBar() {
	const { cartState, cartDispatch } = useCart();
	const [slider, setSlider] = useState(100);

	return (
		<aside className="side-bar">
			<div className="check-list">
				<div className="one-category">
					<div className="list-title">PRICE</div>

					<div className="slider-container">
						<input
							className="slider"
							onChange={(e) => setSlider(e.target.value)}
							type="range"
							min="100"
							max="10000"
							value={slider}
						/>
					</div>

					<div className="box-range">$0 - ${slider}</div>
				</div>
				<div className="checkbox">
					<label htmlFor="radio-1">
						<input
							onChange={() => cartDispatch({ type: 'SORT', payload: 'HIGH_TO_LOW' })}
							checked={cartState.sortBy === 'HIGH_TO_LOW'}
							id="radio-1"
							name="radio"
							type="radio"
						/>
						High to Low
					</label>
					<label htmlFor="radio-2">
						<input
							onChange={() => cartDispatch({ type: 'SORT', payload: 'LOW_TO_HIGH' })}
							checked={cartState.sortBy === 'LOW_TO_HIGH'}
							id="radio-2"
							name="radio"
							type="radio"
						/>
						Low to High
					</label>
				</div>
				<div className="one-category">
					<div className="check-title">AVAILABILITY</div>
					<div className="checkbox">
						<label htmlFor="checkbox-1">
							<input
								onChange={() => cartDispatch({ type: 'TOGGLE_STOCK' })}
								checked={cartState.outOfStock === true}
								id="checkbox-1"
								name="checkbox"
								type="checkbox"
							/>
							Include Out of Stock
						</label>
						<label htmlFor="checkbox-2">
							<input
								onChange={() => cartDispatch({ type: 'TOGGLE_DELIVERY' })}
								checked={cartState.fastDelivery === true}
								id="checkbox-2"
								name="checkbox"
								type="checkbox"
							/>
							Fast Delivery Only
						</label>
					</div>
				</div>

				<div className="one-category">
					<div className="check-title">BRANDS</div>
					<div className="checkbox">
						<label htmlFor="checkbox-3">
							<input id="checkbox-3" name="checkbox" type="checkbox" />
							ACER
						</label>
						<label htmlFor="checkbox-4">
							<input id="checkbox-4" name="checkbox" type="checkbox" />
							APPLE
						</label>
						<label htmlFor="checkbox-5">
							<input id="checkbox-5" name="checkbox" type="checkbox" />
							DELL
						</label>
						<label htmlFor="checkbox-6">
							<input id="checkbox-6" name="checkbox" type="checkbox" />
							WACOM
						</label>
						<label htmlFor="checkbox-7">
							<input id="checkbox-7" name="checkbox" type="checkbox" />
							HUION
						</label>
					</div>
				</div>
			</div>
		</aside>
	);
}

export default SideBar;
