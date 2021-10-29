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
	speak() {
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


// meowJr.sound = "meow?";

// barksby.speak();
// meowJr.speak();
// meowJr.speak();
// meowJr.speak();

/*
// primitive data types are copied by value
let name1 = "Johan";
let name2 = name1;  // name2 == "Johan"

name1 = "Pelle"; // name1 == "Pelle", name2 == "Johan"

// console.log(name1, name2);

// complex data types are copied by reference
let littleBarksby = barksby;
littleBarksby.name = "Barksby Jr";

console.log(barksby.name);
console.log(littleBarksby.name);


let user1 = {
	name: "Pelle",
}

let user2 = {
	name: "Pelle",
}

user1.name = "Kajsa";
*/

// Pass by value
const happyBirthday = (name, age) => {
	age++;
	console.log(`Happy Birthday, ${name}`, age);
}

let pelle = "Pelle";
let pelle_age = 2;
let new_age = pelle_age;
pelle_age = 3;
happyBirthday(pelle, pelle_age);

console.log("age outside", pelle_age);

// Objects are passed by reference
const happyPetBirthday = (pet) => {
	pet.age++;
	console.log(`Happy Birthday, ${pet.name}`, pet.age);
}

happyPetBirthday(meowJr);

console.log("Meow Jr age outside:", meowJr.age); // ?
