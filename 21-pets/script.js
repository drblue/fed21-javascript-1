/**
 * DOM - Document Object Model - Petslist
 *
 * TODO:
 * Loopa över array:en `pets` och för varje `pet`, lägg till en `<li>` till
 * `#petslist` med lite info om varje pet.
 */

// Array of pets
const pets = [
	{
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
	},
	{
		name: "Little Barksby",
		species: "Dog",
		age: 1,
		hobbies: ["Tail-wagging", "Biting furniture"],
		owner: {
			name: "Mr Beans",
			age: 57,
		},
		sound: "woff!",
		speak() {
			console.log(`${this.name} sound: ${this.sound}`);
		}
	},
	{
		hobbies: ["Be cute"],
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
];

// get reference to element with id `petslist`
const petslistEl = document.querySelector('#petslist');

// loop over array of pets
pets.forEach(pet => {
	// append info about pet to petslistEl's innerHTML
	petslistEl.innerHTML += `
		<li>
			${pet.name} is a ${pet.species} of ${pet.age} year(s) old.
			His owner is ${pet.owner?.name} and his favorite hobby is to ${pet.hobbies.join(', ')}.
		</li>
	`;
});
