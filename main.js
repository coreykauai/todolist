import { createToDoItem } from "./model/todo-item.js";
import { createTodoItemView } from "./view/todo-item-view.js";
import { createProject } from "./model/projects.js";

const CONTENT_VIEW = document.querySelector(".content");
const form = document.getElementById("create-todo-form");
const sideBar = document.querySelector(".sidebar");
const projectBtn = document.querySelector(".project-maker");
const projectcreator = document.querySelector(".newProject");
const filtershow = document.querySelector(".showFilters");
const itemsToFilter = document.querySelector(".filters");

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

projectBtn.addEventListener("click", () => {
  projectcreator.classList.toggle("show");
});

filtershow.addEventListener("click", () => {
  itemsToFilter.classList.toggle("show");
});

const project = createProject("first one");
project.logItems();
project.addItem(item);

project.logItems();
