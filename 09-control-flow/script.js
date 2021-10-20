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

/*
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
*/

/**
 * for-loop
 */
/*
console.log("Yey loop!");

let maxLoops = 10;

for (let i = 0; i < maxLoops; i++) {
	// do stuff
	console.log(i); // 4
}

// nu är vi snurriga av allt loopande
console.log('🤢');
*/

let students = [
	"Deadpool",     // 0
	"Black Widow",  // 1
	"Iron Man",     // 2
	"Spider-Man",   // 3
	"Wanda",        // 4
	"Thanos",       // 5
];

for (let i = 0; i < students.length; i++) {
	// this will run one time for each and every student
	console.log(`Student at index ${i} is: ${students[i]}`);
}
