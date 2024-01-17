export function createTodoItemView(title, description, dueDate) {
  const todoContainer = document.createElement("div");
  const titleView = document.createElement("h1");
  const descriptionView = document.createElement("p");
  const dueDateView = document.createElement("p");

  todoContainer.classList.add("todo-container");
  descriptionView.classList.add("todo-subtainer");
  descriptionView.classList.add("hide");
  dueDateView.classList.add("todo-subtainer");
  dueDateView.classList.add("hide");

  titleView.textContent = title;

  todoContainer.addEventListener("click", function () {
    descriptionView.classList.toggle("show");
    dueDateView.classList.toggle("show");
  });

  todoContainer.append(title);
  descriptionView.append(description);
  dueDateView.append(dueDate);

  //render or "append" to ANY element with this paramiter "view".

  const render = (view) => {
    view.append(todoContainer, descriptionView, dueDateView);
  };
  return { render };
}
