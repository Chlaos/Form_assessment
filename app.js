let todos = [];

// Select elements
let form = document.querySelector("#todoForm");
let input = document.querySelector("#todoInput");
let list = document.querySelector("#todoList");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get value from input
    let todoText = input.value;

    // Add todo to array
    todos.push(todoText);

    // Clear the input
    input.value = '';

    // Re-render the todos
    renderTodos();
});

function renderTodos() {
    // Clear the list
    list.innerHTML = '';

    // Create each todo as an li and add it to the ul
    todos.map(todo => {
        let li = document.createElement('li');
        li.textContent = todo;
        list.appendChild(li);
    });
}
