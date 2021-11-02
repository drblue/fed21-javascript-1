/**
 * DOM - Document Object Model 102
 *
 */

const listitemsEl = document.querySelector('ul');
const listitems = document.querySelectorAll('li');
const addButton = document.querySelector('#add');

// add event listener to UL
listitemsEl.addEventListener('click', e => {
	console.log("This is a UL click event", e);
	console.log("You clicked on:", e.target);

	// did user click on an LI?
	if (e.target.tagName === "LI") {
		// yep
		e.target.style.color = "red";
	}
});

/*
// forEach list item, add a event-listener for click-events
listitems.forEach(listitem => {
	// add a event-listener for click-events
	listitem.addEventListener('click', (e) => {
		// e.stopPropagation();

		console.log('You clicked on a LI', e.target);
		e.target.style.color = "green"
	})
});
*/

addButton.addEventListener('click', () => {
	// will *REPLACE* all content in listitemsEl with a NEW string that contains both the old and the new content
	listitemsEl.innerHTML += `<li>I am a new list item 👶🏻</li>`;

	/*
	// create a new listitem
	const newListItem = document.createElement('li');  // "<li></li>"

	// set content of listitem
	newListItem.innerText = "I am a new list item 👶🏻";

	// add event listener to new listitem
	newListItem.addEventListener('click', (e) => {
		console.log('oh you clicked on:', e.target);
		e.target.style.color = "green"
	});

	console.log("Created a brand new listitem", newListItem);

	// append the new listItem to the UL
	listitemsEl.append(newListItem);
	*/
});

document.querySelector('a').addEventListener('click', e => {
	// stop using from leaving our site
	e.preventDefault();

	alert("Mohahaha, you cant leave! 😈");
});
