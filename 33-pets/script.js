/**
 * Async pets
 *
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
