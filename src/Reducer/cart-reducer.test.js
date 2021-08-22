import { cartReducer } from './CartReducer';

describe('testing adding to wishlist', () => {
	test('Should Add item to wishlist', () => {
		const initialState = {
			wishList: [],
		};
		const itemId1 = '12345';
		let action = {
			type: 'ADD_TO_WISHLIST',
			payload: { productId: itemId1 },
		};

		const state = cartReducer(initialState, action);
		expect(state).toEqual({
			wishList: ['12345'],
		});

		const itemId2 = '1234';

		action = {
			type: 'ADD_TO_WISHLIST',
			payload: { productId: itemId2 },
		};

		const state2 = cartReducer(state, action);
		expect(state2).toEqual({
			wishList: ['12345', '1234'],
		});
	});

	test('Should Remove Item from Wishlist', () => {
		const initialState = {
			wishList: ['12345', '1234'],
		};

		const itemId1 = '12345';

		let action = {
			type: 'REMOVE_FROM_WISHLIST',
			payload: { productId: itemId1 },
		};

		const state = cartReducer(initialState, action);
		expect(state).toEqual({
			wishList: ['1234'],
		});
	});
});
