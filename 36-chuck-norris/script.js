/**
 * Chuck Norris Joke of the Day
 *
 * <https://api.chucknorris.io/>
 * <https://api.chucknorris.io/jokes/random>
 */

const get = async (url) => {
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Response was not OK. Status returned was "${res.status} ${res.statusText}".`);
	}

	return await res.json();
}

const getNewJoke = async () => {
	try {
		const data = await get('https://api.chucknorris.io/jokes/random');
		document.querySelector('#joke').innerText = data.value;
	} catch (err) {
		console.error("Could not fetch joke.", err);
	}
}

/*
const getNewJoke = () => {
	get('https://api.chucknorris.io/jokes/random')
		.then(joke => {
			document.querySelector('#joke').innerText = joke.value;
		})
		.catch(err => {
			console.error("Could not fetch joke.", err);
		});
}
*/

// get a joke when button is pressed
document.querySelector('#getJokeBtn').addEventListener('click', () => {
	getNewJoke();
});

// start of with a joke
getNewJoke();
