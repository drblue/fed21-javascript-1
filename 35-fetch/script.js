/**
 * Fetch
 *
 */

/*
fetch('data/dogs.json')
	.then(res => res.json())
	.then(data => {
		console.log("Got data!", data);
	})
	.catch(err => {
		console.log("Dogs rejected!", err);
	});
*/

fetch('data/horses.json')
	.then(res => {
		// trigger an error
		if (!res.ok) {
			throw new Error("Response was not OK!");
		}

		return res.json();
	})
	.then(data => {
		console.log("Got data!", data);
	})
	.catch(err => {
		console.log("Dogs rejected!", err);
	});
