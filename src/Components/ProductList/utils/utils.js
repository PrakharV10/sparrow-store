export function getSorted(data, sortBy) {
	if (sortBy && sortBy === 'HIGH_TO_LOW')
		return data.sort(function (a, b) {
			return b.price - a.price;
		});
	else if (sortBy && sortBy === 'LOW_TO_HIGH')
		return data.sort(function (a, b) {
			return a.price - b.price;
		});
	else return data;
}

export function searchFilter(data, searchKeyWord) {
	return data.filter((item) => {
		if (
			item.name.toLowerCase().includes(searchKeyWord.toLowerCase()) === true ||
			item.brand.toLowerCase().includes(searchKeyWord.toLowerCase()) === true
		)
			return item;
		return null;
	});
}

export function getFiltered(sortedData, fastDelivery, outOfStock) {
	return sortedData
		.filter((item) => {
			if (fastDelivery === true) return item.fastDelivery === true;
			return item;
		})
		.filter((item) => {
			if (outOfStock === false) return item.inStock === true;
			return item;
		});
}

export function getFilteredBrands(products, brandName) {
	if (brandName.length === 0) return products;

	return products.filter((product) => {
		if (brandName.find((one) => one === product.brand)) return true;
		return false;
	});
}
