/**
 * Functions
 */

/**
 * Function Declaration
 */
// function greet() {
// 	alert("Hello, World!");
// 	console.log("Hello, World!");
// }

// function greetUser(name, time = "morning") {
// 	console.log(`Good ${time}, ${name}`);
// }

/**
 * Function Expression
 */

/*
const greet = function() {
	alert("Hello, World!");
	console.log("Hello, World!");
}

const greetUser = function(myName, time = "morning") {
	console.log(`Good ${time}, ${myName}`);
}

const circleCircumference = function(radius) {
	return 2 * Math.PI * radius;
}

let circumference = circleCircumference(20);
console.log(circumference);

const makeMoreInteresting = function(txt) {
	return txt + "!!!!!!!!"
}

console.log( makeMoreInteresting("☕️❓") )
*/

/**
 * Arrow Function
 * ("Fat Arrow Function")
 */

// Function Expression
// const circleCircumferenceExpression = function(radius) {
// 	return 2 * Math.PI * radius;
// }

// Function Expression (Arrow Function)
// const circleCircumference = (radius) => {
// 	return 2 * Math.PI * radius;
// }

/*
const disturbUser = (txt) => {
	alert(txt);
}
const nagUser = (txt) => {
	console.log(txt);
}

const scream = (txt, apa) => {
	let interesting = txt.toUpperCase() + "!!!!!";
	apa(interesting);
}

scream("Is a bad movie", nagUser);
*/

let students = ["Johan", "Pelle", "Kajsa", "Maja"];

for (let i = 0; i < students.length; i++) {
	console.log(`Student at index ${i} is: ${students[i]}`);
}

students.forEach( (student, i) => {
	console.log(`Student at index ${i} is: ${student}`);
} );
