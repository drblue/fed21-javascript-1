/**
 * Better TODOs
 *
 */

// get references to DOM elements
const todosEl = document.querySelector('#todos');
const newTodoFormEl = document.querySelector('#new-todo-form');

// list of todos
const todos = [
	"Eat",
	"Code",
	"Sleep",
	"Repeat"
];

const renderTodos = () => {
	// empty UL of todos
	todosEl.innerHTML = "";

	// render todos to DOM
	todos.forEach((todo, i) => {
		console.log(`Todo at index ${i} is: "${todo}"`);

		todosEl.innerHTML += `<li class="list-group-item" data-index="${i}">
			${todo}
			<button class="ms-2 btn btn-sm btn-danger">🚮</button>
		</li>`;
	});
}

// render (initial list of) todos
renderTodos();

newTodoFormEl.addEventListener('submit', e => {
	// stop form from being submitted to the web server
	// and hence causing a page reload 😨
	e.preventDefault();

	// get todo to add to list of todos
	const newTodoDescription = e.target.newTodo.value;

	// empty input
	e.target.newTodo.value = "";

	// add todo to array of todos
	todos.push(newTodoDescription);

	// render todos
	renderTodos();
});

newTodoFormEl.addEventListener('reset', e => {
	// OH NO YOU NOT RESET FORM, FORM RESETS YOU!
	// e.preventDefault();
	// alert("Oh no you didn't");

	alert("Good job cleaning! 👍🏻");
});

// react to when user clicks on something in our TODO list
todosEl.addEventListener('click', e => {
	console.log(`You clicked on a ${e.target.tagName} element`, e.target);

	// check if user clicked on a LI element
	if (e.target.tagName === "LI") {
		// toggle class completed on/off on LI
		// e.target.classList.toggle('completed');

	} else if (e.target.tagName === "BUTTON") {
		// How to find the clicked todo in our array,
		// and then remove it from the array?
		const buttonEl = e.target;
		const liEl = buttonEl.parentElement;
		const index = liEl.dataset.index; // data-index=""

		// shorter version of above 3 lines
		// const index = e.target.parentElement.dataset.index;

		// Remove item with index from array
		todos.splice(index, 1);

		// Render todos
		renderTodos();
	}
});
