/**
 * Array Methods
 *
 * .sort()
 * .filter() <--
 * .find()
 * .map()
 * .reduce()
 */

// numbers
const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 7, 33, 52 ];

// put all numbers >= 25 in new array
/*
const largeNumbers = [];
numbers.forEach(num => {
	if (num >= 25) {
		largeNumbers.push(num);
	}
});
*/

/*
// filter out all numbers >= 25
const largeNumbers = numbers.filter(num => {
	return (num >= 25);

	if (num >= 25) {
		return true;
	} else {
		return false;
	}
});
*/

/*
// filter out all numbers >= 25
const largeNumbers = numbers.filter(num => num >= 25);

console.log("Large numbers:", largeNumbers);

const names = ["Johan", "Kajsa", "Bo", "Li"];
const longishNames = names.filter(name => name.length > 2);
console.log("Long-ish names:", longishNames);
*/

const students = [
	{
		name: "Johan",
		points: 1337,
	},
	{
		name: "Peter",
		points: 3,
	},
	{
		name: "Alicia",
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

// get all students which are godkända (>= 40)
const passed = students.filter(student => student.points >= 40);
console.log("Students who passed the exam:", passed);
