/**
 * Scope
 */

let points = 50;

if (true) {
	points = 40;
	console.log("points inside first if-statement:", points);

	if (true) {
		points = 1337;
		console.log("points inside inside if-statement:", points);
	}

	console.log("points inside first if-statement, but after inside inside:", points);
}

console.log("points outside if-statement:", points);

/*
var points = 50;

if (true) {
	var points = 40;
	console.log("points inside first if-statement:", points); // 40

	// if (true) {
	// 	var points = 1337;
	// 	console.log("points inside inside if-statement:", points);
	// }

	// console.log("points inside first if-statement, but after inside inside:", points);
}

console.log("points outside if-statement:", points); // 40
*/
