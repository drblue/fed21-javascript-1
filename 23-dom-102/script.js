/**
 * DOM - Document Object Model 102
 *
 */

const listitemsEl = document.querySelector('ul');
const listitems = document.querySelectorAll('li');
const addButton = document.querySelector('#add');

// forEach list item, add a event-listener for click-events
listitems.forEach(listitem => {
	// add a event-listener for click-events
	listitem.addEventListener('click', (e) => {
		console.log('oh you clicked on:', e.target);
		e.target.style.color = "green"
	})
});

addButton.addEventListener('click', () => {
	// will *REPLACE* all content in listitemsEl with a NEW string that contains both the old and the new content
	listitemsEl.innerHTML += `<li>I am a new list item 👶🏻</li>`;
});
