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
