import { createToDoItem } from "./model/todo-item.js";
import { createProject } from "./model/project.js";
import { createProjectController } from "./controller/project-controller.js";

const CONTENT_VIEW = document.querySelector(".content");
const form = document.getElementById("create-todo-form");
const sideBar = document.querySelector(".sidebar");
const projectBtn = document.querySelector(".project-maker");
const projectcreator = document.querySelector(".newProject");
const filtershow = document.querySelector(".showFilters");
const itemsToFilter = document.querySelector(".filters");
const NEW_PROJECT_FORM = document.querySelector("#create-project");
const PROJECT_LIST = document.querySelector(".project-list");

const projects = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = form.elements;

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

projectBtn.addEventListener("click", () => {
  projectcreator.classList.toggle("show");
});

filtershow.addEventListener("click", () => {
  itemsToFilter.classList.toggle("show");
});

NEW_PROJECT_FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = NEW_PROJECT_FORM.elements;
  const newProjectName = formData["project-name"].value;
  console.log(newProjectName);
  const newProject1 = createProject(newProjectName);
  projects.push(newProject1);
  console.log(projects);
  renderProjectList();
});

function renderProjectList() {
  for (const project of projects) {
    const PROJECT_TITLE = document.createElement("h3");
    PROJECT_TITLE.textContent = project.getName();
    PROJECT_LIST.append(PROJECT_TITLE);
  }
}

let todoList = [
  createToDoItem("finish", "this", 1.21),
  createToDoItem("tudo", "list making", 1),
  createToDoItem("project", "but need", 2),
  createToDoItem("to", "figure out how to", 3),
  createToDoItem("make", "the project folders", 7),
];

const sampoProject = createProject("sample project", todoList);

const sampoController = createProjectController(sampoProject);

sampoController.render(CONTENT_VIEW);
