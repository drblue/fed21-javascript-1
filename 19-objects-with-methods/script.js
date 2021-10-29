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
	speak: () => { // don't use arrow functions in methods on objects as the `this` context object isn't updated to reflect the object it is run on
		console.log(`${this.name} sound: ${this.sound}`);
	}
}

const meowJr = {
	hobbies: "Be cute",
	species: "Kitten",
	age: 1,
	name: "Meow Jr",
	sound: "meooow!",
	meowCounter: 0,
	speak() { // same as writing "speak: function() {}"
		this.meowCounter++;
		console.log(this.sound);
		console.log(`Meowed times today: ${this.meowCounter}`);
	}
}

// console.log(barksby.hobbies.join(", "));
// console.log(`Barksby's owner is ${barksby.owner.name}`);


meowJr.sound = "meow?";

barksby.speak();
meowJr.speak();
meowJr.speak();
meowJr.speak();
