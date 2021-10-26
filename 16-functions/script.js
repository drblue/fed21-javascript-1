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

function greetUser(name, time = "morning") {
	console.log(`Good ${time}, ${name}`);
}

greetUser("Johan", "night");
greetUser("FED21M", "lunch");

greetUser("Grumpy Cat");
