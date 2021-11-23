/**
 * Cat of the Day
 *
 * <https://cataas.com/>
 * <https://cataas.com/cat?json=true>
 */

const baseUrl = 'https://cataas.com';

const get = async (url) => {
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Response was not OK. Status returned was "${res.status} ${res.statusText}".`);
	}

	return await res.json();
}

const getNewCat = async () => {
	try {
		const data = await get(`${baseUrl}/cat?json=true`);
		document.querySelector('#catImg').src = baseUrl + data.url;

	} catch (err) {
		console.error("Once does not simply fetch a cat.", err);
	}
}

/*
const getNewCat = () => {
	get(`${baseUrl}/cat?json=true`).then(data => {
		document.querySelector('#catImg').src = baseUrl + data.url;
	}).catch(err => {
		console.error("Once does not simply fetch a cat., err);
	});
}
*/

// get a cat when button is pressed
document.querySelector('#getCatBtn').addEventListener('click', () => {
	getNewCat();
});

// start of with a cat
getNewCat();
