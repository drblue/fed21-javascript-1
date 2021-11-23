/**
 * Promise all
 *
 */

document.querySelector('#loading-spinner').classList.add('show'); // show spinner

const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts')
	.then(res => res.json())
	.then(posts => {
		// output posts
		document.querySelector('#posts').innerHTML = posts
			.map(post => `<li>${post.title}</li>`)
			.join('');
	});

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
	.then(res => res.json())
	.then(users => {
		// output users
		document.querySelector('#users').innerHTML = users
			.map(user => `<li>${user.name}</li>`)
			.join('');
	});

Promise.all([postsPromise, usersPromise]).then(() => {
	document.querySelector('#loading-spinner').classList.remove('show'); // hide spinner
});
