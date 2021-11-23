/**
 * Promise all
 *
 */

const output = document.querySelector('#output');

const btn1Promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Resolving btn1...");
		document.querySelector('#btn1').classList.replace('btn-secondary', 'btn-success');
		resolve('btn1');
	}, 5000);
})

const btn2Promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Resolving btn2...");
		document.querySelector('#btn2').classList.replace('btn-secondary', 'btn-success');
		resolve('btn2');
	}, 2750);
})

const btn3Promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Resolving btn3...");
		document.querySelector('#btn3').classList.replace('btn-secondary', 'btn-success');
		resolve('btn3');
	}, 8000);
})

output.innerHTML += "Starting promises\n";
document.querySelector('#loading-spinner').classList.add('show'); // show spinner

Promise.all([btn1Promise, btn2Promise, btn3Promise])
.then(values => {
	// all three promises have been fulfilled (either resolved OR rejected)
	console.log("All three promises fulfilled", values);
	output.innerHTML += "All three promises fulfilled!\n";

	document.querySelector('#loading-spinner').classList.remove('show'); // hide spinner
});
