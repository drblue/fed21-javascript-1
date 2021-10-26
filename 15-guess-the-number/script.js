/**
 * Guess the number
 * Lesson: 3
 *
 * STEG 1
 * Sätt ett tal i en variabel. Be användaren att gissa talet. Om det är fel,
 * fråga igen. Om det är rätt, visa en alert med ett grattis-meddelande.
 * Om användaren skriver in talet 0 så ska spelet avslutas.
 *
 * STEG 1.5
 * Berätta för användaren om gissningen är för låg eller för hög. Naturligtvis
 * ska de få gissa igen efter detta.
 *
 * STEG 2
 * Slumpa talet som användaren ska gissa, så att de inte gissar rätt varje gång.
 *
 * STEG 3
 * Spara ner hur många gissningar som krävdes. Visa antalet gissningar när
 * användaren gissat rätt.
 *
 * STEG 4
 * Efter att man gissat rätt så slumpa fram ett nytt tal och starta om spelet
 * på nytt.
 * Spara en "highscore", dvs hur få gånger som krävts för att gissa rätt.
 * Om användaren gissar rätt på fler gånger, visa "Tyvärr du gissade rätt på
 * ${tries} antal försök men din highscore är ${highscore}".
 * Om användaren gissar rätt på färre gånger, visa "YAY NEW HIGHSCORE! ${highscore}"
 */

// Get a random number between 1-10
function getRandomNumber() {
	return Math.ceil( Math.random() * 10 );
}

/**
 * Number to guess
 */
let highscore = false;
let exitGame = false;
while (!exitGame) {

	// PARTY ON
	let numberToGuess = getRandomNumber();
	let continueGame = true;
	let guesses = 0;

	console.log(`numberToGuess: ${numberToGuess}`);

	while (continueGame) {
		// Increase number of guesses made
		guesses++;   //   guesses += 1   guesses = guesses + 1

		// Ask user for guess
		let guess = Number( prompt("Please enter your guess") );
		console.log("Guessed number:", guess, typeof guess);

		// Is guess correct?
		if (guess === numberToGuess) {

			// we can haz highscore?
			if (highscore) {
				// new highscore?
				if (guesses < highscore) {
					console.log(`YAY NEW HIGHSCORE!`);
					highscore = guesses;
				} else {
					console.log(`Sorry, no new highscore. Your current highscore is ${highscore}.`);
				}
			} else {
				highscore = guesses;
			}

			console.log("Guess was correct! 🥳");
			alert(`Great success! You guessed the correct answer in ${guesses} guesses 🥳`);
			continueGame = false;

		} else if (guess === 0) {
			console.log("Guess was 0, quitting game");
			alert(`Y U GIVE UP AFTER ONLY ${guesses} GUESSES?!`);
			continueGame = false;
			exitGame = true;

		} else if (guess < numberToGuess) {
			console.log(`TOO LOW!`);

		} else if (guess > numberToGuess) {
			console.log(`TOO HIGH!`);

		}
	}

}


