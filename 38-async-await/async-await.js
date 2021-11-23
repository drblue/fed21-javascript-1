/**
 * async/await
 */

const getJSON = (url) => {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then(res => {
				if (!res.ok) {
					throw new Error("Could not fetch data");
				}
				return res.json();
			}).then(data => {
				resolve(data);
			})
	});
}

const getJSONAsync = async (url) => {
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error("Could not fetch data");
	}

	return await res.json();
}

getJSONAsync();




/*
const sleep1500 = () => {
	return new Promise((resolve, reject) => {
		// do stuff, then resolve or reject
		setTimeout(() => {
			resolve();
		}, 1500);
	});
}
*/

/*
sleep1500().then(() => {
	alert('👻');
});

sleep1500().then(() => {
	alert('🎅🏻');
});
*/

/*
const hello = () => {
	return "Hello";
}

const helloAsync = async () => {
	return "Hello";
}

const helloPromise = () => {
	return new Promise((resolve, reject) => {
		resolve("Hello");
	});
}

helloAsync().then((data) => {
	console.log("helloAsync fulfilled:", data);
});
*/
