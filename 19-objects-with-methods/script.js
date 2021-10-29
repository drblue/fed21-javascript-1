/**
 * Objects with Methods
 */

const barksby = {
	name: "Mr Barksby",
	species: "Dog",
	age: 5,
	hobbies: ["Tail-wagging", "Car-chasing", "Eating lots of treats"],
	owner: {
		name: "Mr Beans",
		age: 57,
	},
	sound: "WOOOFF!",
	speak() { // same as writing "speak: function() {}"
		console.log(`${this.name} sound: ${this.sound}`);
	}
}

const meowJr = {
	hobbies: "Be cute",
	species: "Kitten",
	age: 1,
	name: "Meow Jr",
	sound: "meooow!",
	speak: () => { // don't use arrow functions in methods on objects as the `this` context object isn't updated to reflect the object it is run on
		console.log("Meow Jr sound:", this.sound);
	}
}

// console.log(barksby.hobbies.join(", "));
// console.log(`Barksby's owner is ${barksby.owner.name}`);

barksby.speak();
meowJr.speak();
