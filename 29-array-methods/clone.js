/**
 * Array Cloning
 *
 */

const names = ["Johan", "Kalle", "Pelle"];
// const clone_fail = names; // Copies the *reference* to the array, *NOT* the _contents_ of the array

/*
const new_array = [];
for (let i = 0; i < names.length; i++) {
	new_array.push(names[i]); // add each element to the new array
}
*/
/*
const new_array = [];
names.forEach(person_name => {
	new_array.push(person_name);
});
*/
// const new_array = names.filter(person_name => true);
const new_array = [ ...names ];

// const popcorn = clone_fail.pop();
// console.log("Name popped:", popcorn);

console.log("names:", names);
console.log("new_array:", new_array);
