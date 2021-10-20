/**
 * Control Flow 👮🏽🎛✋🏻
 */

const minAge = 18;
const maxAge = 65;

let age = 30;

/**
 * Logical Operators
 *
 * && = AND (both has to be true)
 * || = OR (at least one has to be true)
 */

//  30  >=  18    &&    30 <= 65
//      true      &&      true
if (age >= minAge && age <= maxAge) {
	console.log(`You are between ${minAge} and ${maxAge} years old, congrats!`);
} else {
	console.log(`Too young or too old! 😝`);
}

console.log('After if expression');

let username = "bob";
if (username == "dave" || username == "johan") {
	console.log("Access granted. Good morning!");
} else {
	console.log("I can't open the doors.");
}

// More advanced if-statement
if (age >= minAge && age <= maxAge) {
	console.log(`You are between ${minAge} and ${maxAge} years old, congrats!`);
} else if (age < minAge) {
	console.log(`Too young! 👶🏻`);
} else if (age > maxAge) {
	console.log(`Too old! 👴🏻`);
}
