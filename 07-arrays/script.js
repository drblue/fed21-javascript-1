// arrays
/*
let students = [
	"Deadpool",     // 0
	"Black Widow",  // 1
	"Iron Man",     // 2
	"Spider-Man",   // 3
];

console.log("Students:", students);
console.log("The second student's name is:", students[1]);

console.log(`We have ${students.length} students in our class.`);

students[1] = "Black Window";
// students[2] = "Steel Man";

let names = students.join(' - ')
console.log(`The students names are: ${names}`);

// find index of string "Iron Man"
console.log("Index of Iron Man:", students.indexOf("Iron Man")); // 2
console.log("Index of Thanos:", students.indexOf("Thanos")); // -1 (does not exist in array)

// add "Wanda" to student list
students.push("Wanda");
console.log(`The students names are: ${students.join(' - ')}`);

// remove last student from student list
let badStudent = students.pop();
console.log(`Removed student named ${badStudent} from list of students.`);

let otherStudents = [
	"Batman",
	"Superman",
	"Wonder Woman"
];

let machup = students.concat(otherStudents); // <-- does not change the students array, returns a NEW array with the otherStudents concatenated at the end
console.log("Students after merge:", students); // students are unchanged

console.log("Machup:", machup); // new array with both students and otherStudents
*/

// multi-dimensional array (arrays in arrays 🤯)
/*
let students = [
	"Johan",   // 0
	"Alicia",  // 1
	"Elliot",  // 2
	"Maja",    // 3
];

let points = [
	42,  // 0
	55,  // 1
	80,  // 2
	18   // 3
];

let lastNames = [
	"Nordström",
	"Johansson",
];

console.log(`${students[2]} got ${points[2]} points.`);
*/

let students = [
	[       // 0
		"Johan",     // 0
		42,          // 1
		"Nordström"  // 2
	],
	[       // 1
		"Alicia",    // 0
		55,          // 1
		"Johansson", // 2
	]
];

console.log("Students", students);
