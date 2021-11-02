/**
 * Workshop: Password Checker (DOM-edition)
 *
 * Skapa ett input-fält där användaren kan skriva in ett lösenord och klicka
 * på en knapp för att få reda på om lösenordet är säkert eller ej.
 *
 * Börja med att meddela användaren via en alert()-ruta, men ett stort plus om
 * du kan få till det så resultatet visas på sidan i en Bootstrap Alert, och
 * att den är av typen danger om det är ett osäkert lösenord och av typen
 * success om det är ett säkert lösenord.
 *
 * Kan du även göra så att input-fältet töms efter varje lösenords-test?
 *
 */

// get references to the element we need access to in our code
const btnCheckPasswordEl = document.querySelector('#btnCheckPassword');
const inputPasswordEl = document.querySelector('#inputPassword');
const statusEl = document.querySelector('#status');

// list of special chars
const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

// function to validate if a password is secure or not
const checkPassword = (password) => {
	console.log(`🕵🏻 Checking password "${password}"`);

	// set status variable to initial value false
	let containsSpecialChar = false;

	// check for any special chars in password
	for (let i = 0; // only run once, at the beginning of the loop
		i < specialChars.length; // should we continue another round?
		i++) // run AFTER each round is executed
	{
		if (password.includes(specialChars[i])) {
			containsSpecialChar = true;
		}
	}

	// Har lösenordet minst 16 tecken?
	if (password.length >= 16) {
		return true;

	} else if (password.length >= 12 && password.includes('-')) {
		return true;

	} else if (password.length >= 8 && containsSpecialChar) {
		return true;

	} else {
		return false;
	}
}

// react to the event of a user clicking on the btnCheckPassword-button
// or: ON the btnCheckPassword-button, react to the EVENT of a CLICK
btnCheckPasswordEl.addEventListener('click', () => {
	const inputPassword = inputPasswordEl.value;

	const res = checkPassword(inputPassword);
	if (res) {
		// alert("That's a secure password! 🥳");
		statusEl.classList.remove('alert-warning');
		statusEl.classList.add('alert-success');
		statusEl.innerHTML = "That's a secure password! 🥳";
	} else {
		// alert("🚨🚨🚨 NEVER USE THAT PASSWORD AGAIN 🚨🚨🚨");
		statusEl.classList.remove('alert-success');
		statusEl.classList.add('alert-warning');
		statusEl.innerHTML = "🚨🚨🚨 NEVER USE THAT PASSWORD AGAIN 🚨🚨🚨";
	}
});
