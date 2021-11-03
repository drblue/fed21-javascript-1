/**
 * Better TODOs
 *
 * Gör om vår TODO till att vara baserad på objekt, där varje objekt
 * har en completed-egenskap som är ett booleskt värde, så huruvida en
 * todo är avklarad eller ej inte förloras när listan renderas om.
 */

// get references to DOM elements
const todosEl = document.querySelector('#todos');
const newTodoFormEl = document.querySelector('#new-todo-form');

// list of todos
const todos = [
	{
		title: "Eat",
		completed: false,
	},
	{
		title: "Code",
		completed: true,
	},
	{
		title: "Sleep",
		completed: false,
	},
	{
		title: "Repeat",
		completed: false,
	}
];

const renderTodos = () => {
	// empty UL of todos
	todosEl.innerHTML = "";

	// render todos to DOM
	todos.forEach((todo, i) => {
		let cssClasses = "list-group-item";
		if (todo.completed) {
			// add LI with class "completed"
			cssClasses += " completed";
		}

		// Append a LI-element to the UL
		todosEl.innerHTML += `
			<li class="${cssClasses}" data-index="${i}">
				${todo.title}
				<button class="ms-2 btn btn-sm btn-danger">🚮</button>
			</li>
		`;
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

	// create a object for the new todo
	const newTodo = {
		title: newTodoDescription,
		completed: false,
	}

	// add todo to array of todos
	todos.push(newTodo);

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
		// find index of todo
		const index = e.target.dataset.index;

		// change completed-status of todo
		todos[index].completed = true;

		// Render todos
		renderTodos();

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
