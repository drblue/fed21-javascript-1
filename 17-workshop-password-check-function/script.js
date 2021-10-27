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

/**
 * Password to test
 */
let password;
// password = "password"; // inte giltigt
// password = "pa$sword"; // giltigt
password = "p@ssw%rd"; // giltigt
// password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt

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
		//console.log("At special char:", specialChars[i]);
		if (password.includes(specialChars[i])) {
			console.log("Password contained char:", specialChars[i]);
			containsSpecialChar = true;
		}
	}

	// Har lösenordet minst 16 tecken?
	if (password.length >= 16) {
		console.log("- ✅ Great! That's a long password!");

	} else if (password.length >= 12 && password.includes('-')) {
		console.log("- ✅ Great! That's a pretty good password!");

	} else if (password.length >= 8 && containsSpecialChar) {
		console.log("- ✅ Great! Such password, much secure, very hard to crack!");

	} else {
		console.log("- 🚨 Insecure password, my grandma can crack it!");
	}
}

checkPassword("javascript-memes-are-funny");
checkPassword("lolcats");
checkPassword("i <3 javascript");
