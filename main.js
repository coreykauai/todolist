import { createToDoItem } from "./model/todo-item.js";
import { createTodoItemView } from "./view/todo-item-view.js";

const CONTENT_VIEW = document.querySelector(".content");

const form = document.getElementById("create-todo-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = form.elements;
  console.log(data["description"].value);
  let newTodoItem = createToDoItem(
    data["title"].value,
    data["description"].value,
    data["due-date"].value
  );
  const itemView = createTodoItemView(
    newTodoItem.getTitle(),
    newTodoItem.getDescription(),
    newTodoItem.getDueDate()
  );
  itemView.render(CONTENT_VIEW);
});

let item = createToDoItem("pizza", "finish todo", 7.25);

const todoView = createTodoItemView(
  item.getTitle(),
  item.getDescription(),
  item.getDueDate()
);

todoView.render(CONTENT_VIEW);
console.log(item.getTitle(), item.getDescription());
