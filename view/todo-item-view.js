export function createTodoItemView(title, description, dueDate) {
  const todoContainer = document.createElement("div");
  const titleView = document.createElement("h1");
  const descriptionView = document.createElement("p");
  const dueDateView = document.createElement("p");

  todoContainer.classList.add("todo-container");
  descriptionView.classList.add("todo-subtainer");
  dueDateView.classList.add("todo-subtainer");

  titleView.textContent = title;

  // const parent = document.getElementsByClassName("todo-container")

  todoContainer.append(title);

  descriptionView.append(description);
  dueDateView.append(dueDate);

  const render = (view) => {
    view.append(todoContainer, descriptionView, dueDateView);
  };
  return { render };
}
