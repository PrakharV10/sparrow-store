import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useCart } from '../../Context';
import './SearchBar.css';

function SearchBar({ showSearch, setShowSearch }) {
	const { cartDispatch } = useCart();
	const [input, setInput] = useState('');
	const navigate = useNavigate();

	function handleClick(e) {
		e.preventDefault();
		cartDispatch({ type: 'SEARCH_FILTER', payload: input });
		setShowSearch(false);
		navigate('/products');
	}

	return (
		<div className={showSearch ? 'search-bar-bg' : 'search-bar-bg hide'}>
			<div className={showSearch ? 'search-bar-modal' : 'search-bar-modal hide'}>
				<div className='heading'>
					What are you looking for?
					<svg
						onClick={() => setShowSearch(false)}
						width='1em'
						height='1em'
						viewBox='0 0 512 512'
					>
						<path
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='32'
							d='M368 368L144 144'
						></path>
						<path
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='32'
							d='M368 144L144 368'
						></path>
					</svg>
				</div>
				<form className='search-bar' onSubmit={(e) => handleClick(e)}>
					<input
						onChange={(e) => setInput(e.target.value)}
						placeholder='Search for Products Here'
					/>
					<button type='submit'>
						<svg width='1em' height='1em' viewBox='0 0 32 32'>
							<path d='M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9z'></path>
						</svg>
					</button>
				</form>
			</div>
		</div>
	);
}

export default SearchBar;
