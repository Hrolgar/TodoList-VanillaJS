const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

// Add Todos Function
const generateTemplate = (todo) => {
  const newTodo = `        
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;

  list.innerHTML += newTodo;
};

// Search Todos Function
const filterTodos = (term) => {
  // All of the list items (list.children) that does NOT match the input.
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  // All of the list items (list.children) that DOES match the input.
  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

// Add Todos Event
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// Delete Todos
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// Keyup Event, search
search.addEventListener("keyup", (e) => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
