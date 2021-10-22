/**
 * Loops ∞
 */


/**
 * for-loop
 */
/*
let sum = 0;
let points = [20, -50, 0, 100, 75, 25, 250, 1337, 1000000];
for (let i = 0; i < points.length; i++) {
	if (points[i] <= 0) {
		continue;
	}

	sum += points[i];
	console.log(points[i], sum);

	if (sum >= 100) {
		console.log("You got maximum score! Stopping further counting");
		break;
	}
}

console.log("🥳");
*/

/*
let sum = 0;
for (let i = 0; i < 20; i++) {
	console.log(`At loop ${i}`);
	if (i % 2 != 0) {
		continue;
	}

	sum += i;   // sum = sum + i
	console.log(`Sum right now is: ${sum}`);

	if (sum >= 100) {
		break;
	}
}

console.log(`Sum after loop is: ${sum}`);
*/

/*
let students = [
	"Deadpool",     // 0
	"Black Widow",  // 1
	"Iron Man",     // 2
	"Spider-Man",   // 3
	"Wanda",        // 4
	// "Thanos",       // 5
];

if (students.length >= 5) {
	for (let i = 0; i < students.length; i++) {
		// this will run one time for each and every student
		console.log(`Student at index ${i} is: ${students[i]}`);
	}
} else {
	console.log(`Too few to start Avengers!`);
}
*/


/**
 * while-loop
 */
for (let i = 0; i < 5; i++) {
	// do stuff
}

let i = 5;
while (i < 5) {
	// do stuff
	console.log("in while-loop, i is:", i);
	i++; // = 5
}

i = 5;
do {
	// do stuff
	console.log("in do while-loop, i is:", i);
	i++; // add to i
} while (i < 5);

// 🥳
console.log("😬");
