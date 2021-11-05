/**
 * Ternary operator
 *
 */

let username = prompt("Enter your username");

let msg = (username)
	? `Welcome, ${username}!`
	: `Welcome guest!`;

/*
let msg;
if (username) {
	msg = `Welcome, ${username}!`;
} else {
	msg = `Welcome guest!`;
}
*/

console.log(msg);
document.querySelector('#greetings').innerText = msg;
