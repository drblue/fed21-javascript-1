/**
 * XMLHttpRequest
 *
 */

const getUsers = () => {
	// insert code here
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
				console.log("Data:", data);

				data.forEach(user => {
					document.querySelector('#users').innerHTML += `<li>${user.name}</li>`;
				})

			} else {
				// Something went wrong with the request
				console.log("Request was *NOT* OK!");
			}
		}
	});

	// Set request to GET data from 'https://jsonplaceholder.typicode.com/users'
	request.open('GET', 'https://jsonplaceholder.typicode.com/users');

	// Send request
	request.send();

	// Done?
	console.log("Request sent!");
}

getUsers();
