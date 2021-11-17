/**
 * XMLHttpRequest
 *
 */

// Create a new XML Http Request
const request = new XMLHttpRequest();

// Attach a event listener to the request
request.addEventListener('readystatechange', () => {
	// Check status of request
});

// Set request to GET data from 'https://jsonplaceholder.typicode.com/users'
request.open('GET', 'https://jsonplaceholder.typicode.com/users');

// Send request
request.send();

// Done?
console.log("Request sent!");
