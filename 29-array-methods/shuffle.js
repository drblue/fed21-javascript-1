/**
 * Array Shuffling
 *
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

/*
numbers.sort(() => {
	// return negative, 0 or positive number
	return 0.5 - Math.random();
});
numbers.sort(() => 0.5 - Math.random());
*/

/**
 * Fisher-Yates algorithm
 * <https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj>
 */
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

/*
console.log("numbers before shuffle", numbers);

shuffleArray(numbers);

console.log("numbers after shuffle", numbers);
*/

const names = ["Adi Dzocaj", "Alexander Bergquist", "Alexander Kocman", "Andjela Saponjic", "Benjamin Benson", "Benjamin Tsubarah", "Calle Nilsson", "Cazpian Levén", "Chikage Takahashi Molander", "Daniel Be", "Daniel Carlsson", "Elin Ahlgren", "Emma Käck", "Eric Ståhl", "Frans Gustavson Påsse", "Frida Lam", "Glafira Veretennikova", "Gustaf Grönlund", "Hanna Håkanson", "Heidi Sjöberg", "Hugo Carzborn", "Jesper Kling", "Johan Ranestam", "Johanna Bäckström", "Johanna Jönsson", "Jona Torsson", "Josefine Ahlstedt", "Julia Jespersdotter Högman", "Julia Nemell", "Linus Lindberg", "Malin Olsson", "Maria Haara-Lundhammar", "Maria Lövgren", "Maxim Khnykin", "Nikola Dimitrijoski", "Paulina Kiendys", "Philip Le", "Raymond Lam", "Robin Karlsson", "Sara Almqvist", "Tim Nilsson", "Tirapat Sukjit", "Tobias Silfverberg", "Wiktoria Dobrzewinska"];

// names.sort(() => 0.5 - Math.random());

// console.log("Not true shuffling:", names.join(", "));

shuffleArray(names);
console.log("They see me shufflin':", names.join("\n"));
