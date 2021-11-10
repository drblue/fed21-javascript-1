/**
 * Ultimate TODOs
 *
 * 1. Sortera todos baserat på titel
 *
 * 2. Filtrera todos så ni har två listor, en med saker som är kvar att göra,
 * och en lista med avklarade saker.
 *
 * 3. Rendera ut varje TODO's ID till DOM istället för dess array-index.
 *
 * 4. Uppdatera click-eventhandler:n så att den hämtar ID från förälderns
 * data-attribut istället för index. Använd sedan detta ID för att hitta rätt
 * TODO i `todos`-array:en.
 *
 * 5. (extra utmaning)
 * När man skapar en ny TODO, se om du kan få till en funktion som hämtar ut
 * det högsta ID som finns och tar +1 på det, och använder det talet som den
 * nya TODO:ns ID.
 *
 */

// get references to DOM elements
const todosEl = document.querySelector('#todos');
const completedTodosEl = document.querySelector('#completed-todos');
const newTodoFormEl = document.querySelector('#new-todo-form');

// list of todos
const todos = [
	{
		id: 1,
		title: "eat",
		completed: false,
	},
	{
		id: 2,
		title: "Code",
		completed: true,
	},
	{
		id: 3,
		title: "Sleep",
		completed: false,
	},
	{
		id: 4,
		title: "Repeat",
		completed: false,
	},
	{
		id: 5,
		title: "Learn JavaScript",
		completed: true,
	}
];

// sort todos
todos.sort((a, b) => {
	if (a.title.toUpperCase() < b.title.toUpperCase()) {
		return -1;
	}

	if (a.title.toUpperCase() > b.title.toUpperCase()) {
		return 1;
	}

	return 0;
});

const renderTodos = () => {
	// empty both lists of todos
	todosEl.innerHTML = "";
	completedTodosEl.innerHTML = "";

	// get all incomplete todos
	const incompleteTodos = todos.filter(todo => !todo.completed);

	// get all completed todos
	const completedTodos = todos.filter(todo => todo.completed);

	// render incomplete todos to DOM
	incompleteTodos.forEach(todo => {
		// Append a LI-element to the UL
		todosEl.innerHTML += `
			<li class="list-group-item" data-id="${todo.id}">
				${todo.title}
				<button class="ms-2 btn btn-sm btn-danger">🚮</button>
			</li>
		`;
	});

	// render completed todos to DOM
	completedTodos.forEach(todo => {
		// Append a LI-element to the UL
		completedTodosEl.innerHTML += `
			<li class="list-group-item" data-id="${todo.id}">
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
	// check if user clicked on a LI element
	if (e.target.tagName === "LI") {
		// find id of clicked todo
		const todo_id = e.target.dataset.id;  // data-id=""

		// find todo with id `todo_id` in list of todos
		const found_todo = todos.find(todo => todo.id == todo_id);

		// change completed-status of found todo
		found_todo.completed = true;

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
