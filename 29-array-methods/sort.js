/**
 * Array Methods
 *
 * .sort() <--
 * .filter()
 * .find()
 * .map()
 * .reduce()
 */

// names
/*
const names = ["Johan", "Fredrik", "Peter", "Alicia", "Maja", "Elliot"];
console.log("Names in chaos:", names);

// sort array alphabetically
names.sort();

console.log("Names in proper order:", names);

// reverse order
names.reverse();
console.log("Names in reverse order:", names);
*/

// numbers
/*
const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 7, 33, 52 ];

console.log("Numbers in chaos:", numbers);

// sort numbers NUMERICALLY
numbers.sort( (a, b) => {
	// shorthand
	return (a - b);

	// if a is less than b (i.e. a should be sorted BEFORE b)
	if (a < b) {
		return -1;
	}

	// if a is greater than b (i.e. a should be sorted AFTER b)
	if (a > b) {
		return 1;
	}

	// a must be equal b
	return 0;
} );

console.log("Numbers in proper? order:", numbers);

// EVEN SHORTER NUMBER SORTING 🤯
// sort numbers NUMERICALLY
numbers.sort( (a, b) => a - b );
*/

// We can even sort objects based on a property!
const students = [
	{
		name: "johan",
		points: 1337,
	},
	{
		name: "Peter",
		points: 3,
	},
	{
		name: "alicia",
		points: 42,
	},
	{
		name: "Elliot",
		points: 88,
	},
	{
		name: "Maja",
		points: 35,
	},
];

students.sort( (a, b) => {
	if (a.name.toUpperCase() < b.name.toUpperCase()) {
		return -1;
	}

	if (a.name.toUpperCase() > b.name.toUpperCase()) {
		return 1;
	}

	return 0;
});

console.log("Sorted students:", students);
