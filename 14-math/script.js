/**
 * Math
 */

let random = Math.random(); // 0-0,999999
let randomMultiplied = random * 10; // 0-9,999
let roundedRandomMultiplied = Math.ceil(randomMultiplied);

let randomNumber = Math.ceil( Math.random() * 10 );

// console.log(randomNumber);

function getRandomNumber() {
	return Math.ceil( Math.random() * 10 );
}

for (let i = 0; i < 10; i++) {
	let randomNumber = getRandomNumber();
	console.log("Random number:", randomNumber);
}
