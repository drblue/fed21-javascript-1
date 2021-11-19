/**
 * Promises 101
 *
 */

const teacherIsNice = true;

const willWeGetTheAnswersToTheExam = () => {
	return new Promise((resolve, reject) => {
		// do something that takes some time to do
		// and when done, resolve or reject promise
		setTimeout(() => {
			if (teacherIsNice) {
				// resolve promise
				const answers = [3, 1, 4, 2];
				resolve(answers);
			} else {
				// reject promise
				reject("AINT NOBODY GOT TIME FOR THAT");
			}
		}, 5000);
	});
}
/*
willWeGetTheAnswersToTheExam()
	.then((data) => {
		console.log("🥳 Promise has been fulfilled! YAY!");
		console.log("Here's the answers:", data);
	})
	.catch((err) => {
		console.log("😔 YOU ALWAYS MAKE PROMISES BUT NEVER HOLD THEM!");
		console.log("Promise rejected with reason:", err);
	});
*/

const getJSON = (url) => {
	// create a new promise
	return new Promise((resolve, reject) => {
		// do stuff that was promised
		const request = new XMLHttpRequest();

		request.addEventListener('readystatechange', () => {
			if (request.readyState === 4) {
				if (request.status === 200) {
					const data = JSON.parse(request.responseText);
					resolve(data);

				} else {
					console.log("Request was *NOT* OK!");
					reject("Could not get data");
				}
			}
		});

		request.open('GET', url);
		request.send();
	});
}

console.log("Getting data...");
getJSON('data/cats.json')
	.then(cats => {
		console.log("Got cats!", cats);
		return getJSON('data/dogs.json')
	})
	.then(dogs => {
		console.log("Got dogs!", dogs);
		return getJSON('data/birds.json');
	})
	.then(birds => {
		console.log("Got birds!", birds);

	})
	.catch(err => {
		console.log("No cats found!", err);
	});

console.log("End of code");
