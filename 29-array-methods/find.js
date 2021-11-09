/**
 * Array Methods
 *
 * .sort()
 * .filter()
 * .find() <--
 * .map()
 * .reduce()
 */

// numbers
// const numbers = [ 5, 21, 42, 13, 8, 28, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 7, 33, 52, 1 ];

/*
let firstLargeNum;
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] >= 25) {
		firstLargeNum = numbers[i];
		break;
	}
}
*/
/*
const numbers = [ 5, 21, 42, 13, 8, 28, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 7, 33, 52, 1 ];

const firstLargeNum = numbers.find(num => {
	return (num >= 25);

	if (num >= 25) {
		return true;
	} else {
		return false;
	}
});
console.log("First number >= 25", firstLargeNum);
*/

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

const nomNomProduct = products.find(product => product.sku === "GOOD-COOKIES");
if (nomNomProduct) {
	console.log("YAY FOUND COOKIES!");
} else {
	console.log("SAD COOKIE MONSTER 🥺");
}
