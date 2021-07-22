import React, { useEffect, useState } from 'react';
import { useCart } from '../../Context';
import { SERVER_URL } from '../../utils/api';
import { loadScript } from '../../utils/loadScript';
import { serverCallHandler } from '../../utils/serverCallHandler';
import './PriceTotal.css';

function PriceTotal() {
	const { cartState } = useCart();
	const [paymentStatus, setPaymentStatus] = useState('idle');

	const total = cartState.cart.reduce((accum, item) => {
		return accum + item.quantity * item.product.price;
	}, 0);

	async function orderServerCall() {
		const { response } = await serverCallHandler('POST', `${SERVER_URL}/order`, {
			price: total - 40,
		});
		if (response.success) {
			return response;
		} else {
			console.log(response.message);
			return;
		}
	}

	async function showPaymentGateway() {
		if (total === 0) return;

		setPaymentStatus('loading');
		const { amount, currency, id } = await orderServerCall();

		const options = {
			key: 'rzp_test_tIpfMrAgVtS7gw',
			amount,
			currency,
			name: 'Phoenix',
			description: 'Thankyou for purchasing from Sparrow.',
			order_id: id,
			handler: function (response) {
				setPaymentStatus('fulfilled');
				alert(response.razorpay_payment_id);
				alert(response.razorpay_order_id);
				alert(response.razorpay_signature);
			},
			prefill: {
				name: 'Raven Prince',
				email: 'ravenprince@gmail.com',
				contact: '1234567890',
			},
			notes: {
				address: '221B Baker Street',
			},
			theme: {
				color: '#000000',
			},
		};

		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	}

	useEffect(() => {
		loadScript('https://checkout.razorpay.com/v1/checkout.js');
	}, []);

	return (
		<div className='price-total'>
			<div>
				<div className='total-title'>PRICE DETAILS</div>
				<div className='price-breakdown'>
					<span>Price ({cartState.cart.length} Item)</span>
					<span>Rs. {total}</span>
				</div>
				<div className='price-breakdown'>
					<span>Discount</span>
					<span className='c-green'>- Rs. 40</span>
				</div>
				<div className='price-breakdown b-btm'>
					<span>Delivery Charges</span>
					<span className='c-green'>FREE</span>
				</div>
				<div className='price-breakdown total-amount b-btm'>
					<span>Total Amount</span>
					<span>Rs. {total - 40}</span>
				</div>
				<button onClick={showPaymentGateway} className='btn btn-black'>
					PLACE ORDER
				</button>
				{paymentStatus === 'loading' && (
					<div className='payment-text'>Your Payment is Being Processed...</div>
				)}
				{paymentStatus === 'fulfilled' && (
					<div className='payment-text'>Your Payment was Successful.</div>
				)}
			</div>
		</div>
	);
}

export default PriceTotal;
