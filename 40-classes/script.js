/**
 * Classes
 *
 * Class names are written in PascalCase / UpperCamelCase / TitleCase
 * (each word should be capitalized, including the first word).
 */

/**
 * Cat
 */
class Cat {
	fluffy = true

	constructor(name, age) {
		// this will be called when a new instance of this class is created
		console.log(`Building cat called ${name} of age ${age}, stand by... 🏗🐱`);

		this.name = name;
		this.age = age;
	}

	happyBirthday() {
		this.age++;
		console.log(`Happy Birthday ${this.name}! New age: ${this.age} 🥳🎂`);
	}
}

// 1. create new instance of class
// 2. run constructor of class
// 3. bind `this` to the new instance
const fluffles = new Cat("Mr Fluffles", 3);  // construct a new instance of the class Cat
const captainCat = new Cat("Captain Cat", 9);

fluffles.happyBirthday();

/**
 * House
 */
class House {
	hasRoof = true
	owner = false

	constructor(address) {
		this.address = address;
	}

	getAdress() {
		return this.address;
	}

	getOwner() {
		return this.owner;
	}

	setOwner(owner) {
		if (typeof owner !== "string") {
			return false;
		}
		this.owner = owner;
	}
}

const myHouse = new House("Drottninggatan 4, Malmö");
const neighbourHouse = new House("Drottninggatan 5, Malmö");

myHouse.setOwner([]); // won't work as the method checks if what we send it is a string before changing the `owner`-property on the object
myHouse.setOwner("Johan"); // will work as we send in a string 👍🏻
neighbourHouse.owner = "Pelle"; // **DON'T DO THIS**
