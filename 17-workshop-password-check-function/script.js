/**
 * Workshop: Password Checker using Functions
 *
 * Skriv om lösenordskollen till att använda funktioner (inkl. forEach) och
 * kollar en lista av lösenord.
 *
 * Ni ska ha en funktion som tar emot ett lösenord och validerar det. Den ska
 * returnera true om det är ett tillräckligt säkert lösenord, eller false om
 * det inte uppfyller kraven.
 *
 * Varje lösenord ska console.log’as tillsammans med dess resultat.
 *
 *
 * ROADMAP
 *
 * 1. Skapa en array som alla lösenord ligger i.
 *
 * 2.1. Flytta logiken som kollar om lösenordet uppfyller kraven till en egen
 * funktion.
 *
 * 2.2. Kalla på funktionen en gång för varje lösenord i array:en och skicka
 * med lösenordet till funktionen.
 *
 * 3. Ändra så att funktionen returnerar true/false istället för att logga till
 * konsollen.
 *
 */


const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

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

/**
 * Password to test
 */
 const passwords = [
	"password", // inte giltigt
	"pa$sword", // giltigt
	// "p@ssw%rd", // giltigt
	// "pa$$word", // giltigt
	// "secretpassword", // inte giltigt
	// "secret-password", // giltigt
	// "such-password-much-secure-very-long", // giltigt
];

// Loop over all passwords
passwords.forEach( (item) => {

	// Check if password is secure 🕵🏻
	let res = checkPassword( item );

	// Was password secure?
	if (res) {
		// YES! 💪🏻
		console.log(`🔐 Password '${item}' is secure`);
	} else {
		// No! 😱
		console.log(`🚨 Password '${item}' is *NOT* secure`);
	}

} );
