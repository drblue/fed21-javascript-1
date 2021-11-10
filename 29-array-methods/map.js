/**
 * Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map() <--
 * .reduce()
 */

// numbers
const numbers = [ 5, 21, 42, 13, 8, 28, 50 ];

// multiply all the numbers by 2
/*
const doubleNumbers = [];
numbers.forEach(num => {
	doubleNumbers.push(num * 2);
});
*/
const doubleNumbers = numbers.map(num => num * 2);


// products
const products = [
	{
		sku: "CORR-BWL",
		name: "Corrosive bowl",
		in_stock: 321,
		price: 0.99,
	},
	{
		sku: "CTN-SPCE",
		name: "Cotton spice rack",
		in_stock: 2,
		price: 149.99,
	},
	{
		sku: "GOOD-COOKIES",
		name: "Inside-out Oreo cookies",
		in_stock: 18,
		price: 2.49,
	},
	{
		sku: "BACK-BREAKER",
		name: "The uncomfortable broom",
		in_stock: 1,
		price: 28.65,
	},
];

/*
const skus = [];
products.forEach(product => {
	skus.push(product.sku);
})
*/
const skus = products.map(product => product.sku);
const product_names = products.map(product => product.name);
console.log("SKUs:", skus);

// create sale products
const sale_products = products.map(product => {
	return {
		sku: product.sku,
		name: product.name,
		in_stock: product.in_stock,
		price: product.price / 2
	};
});
