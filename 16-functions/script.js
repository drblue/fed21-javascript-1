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
