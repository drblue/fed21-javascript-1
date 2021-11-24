/**
 * Classes
 *
 */

// PascalCase / UpperCamelCase / TitleCase
class Cat {
	constructor(name, age) {
		// this will be called when a new instance of this class is created
		console.log(`Building cat called ${name} of age ${age}, stand by... 🏗🐱`);

		this.name = name;
		this.age = age;
	}
}

const fluffles = new Cat("Mr Fluffles", 3);  // construct a new instance of the class Cat
const captainCat = new Cat("Captain Cat", 9);

/*
const happyBirthdayFunction = function() {
	this.age++;
	console.log(`Happy Birthday ${this.name}! New age: ${this.age} 🥳🎂`);
}

const fluffles = {
	name: "Mr Fluffles",
	age: 3,
	owner: "Bengt",
	hobbies: "Annoy people",
	species: "Cat",
	happyBirthday: happyBirthdayFunction,
}

const captainCat = {
	name: "Captain Cat",
	species: "Cat",
	age: 9,
	owner: "Agda",
	hobbies: "HIIT",
}

const meowJr = {
	hobbies: "Be cute",
	species: "Kitten",
	age: 1,
	name: "Meow Jr",
	happyBirthday: happyBirthdayFunction,
}
*/
