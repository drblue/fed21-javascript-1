/**
 * Async pets
 *
 * MINI-WORKSHOP:
 * Skriv om getJSON() till att vara Promise-baserad, så att vi kan skriva:
 *
 * getJSON('data/cats.json')
 *     .then(cats => {
 *         console.log("Got cats?", cats);
 *     })
 *     .catch(err => {
 *         console.log("NO CATS FOR YOU!", err);
 *     })
 */

const getJSON = (url, cb) => {
	// Create a new XML Http Request
	const request = new XMLHttpRequest();

	// Attach a event listener to the request
	request.addEventListener('readystatechange', () => {
		// Check if readyState is 4 (=== DONE)
		if (request.readyState === 4) {

			// Was request successful (200 = OK)?
			if (request.status === 200) {
				// Request returned successful!
				console.log("Request was OK");

				// take a STRING and PARSE it into a JavaScript Object (Array)
				const data = JSON.parse(request.responseText);

				cb(false, data);

			} else {
				// Something went wrong with the request
				console.log("Request was *NOT* OK!");

				cb("Something went wrong");
			}
		}
	});

	// Set request to GET data from url
	request.open('GET', url);

	// Send request
	request.send();

	// Done?
	console.log("Request sent!");
}

// Get list cats
getJSON('data/cats.json', (err, cats) => {
	if (err) {
		console.log("Could not get list of cats! Error was:", err);
		return;
	}

	console.log("Got list of cats:", cats);

	// Get list of dogs
	getJSON('data/dogs.json', (err, dogs) => {

		// Get list of birds
		getJSON('data/birds.json', (err, birds) => {

			// We finally done?

		});

	});
});
