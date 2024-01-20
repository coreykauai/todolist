export function createTodoItemView(title, description, dueDate) {
  const todoContainer = document.createElement("div");
  const titleView = document.createElement("h1");
  const descriptionView = document.createElement("p");
  const dueDateView = document.createElement("p");
  const deleteBtn = document.createElement("button");

  todoContainer.classList.add("todo-container");
  descriptionView.classList.add("todo-subtainer");
  descriptionView.classList.add("hide");
  dueDateView.classList.add("todo-subtainer");
  dueDateView.classList.add("hide");

  titleView.textContent = title;
  descriptionView.textContent = description;
  dueDateView.textContent = dueDate;
  deleteBtn.textContent = "trash";

  deleteBtn.addEventListener("click", (e) => {
    todoContainer.remove();
    titleView.remove();
    descriptionView.remove();
  });

  const remove = () => {
    titleView.remove();
    descriptionView.remove();
    dueDate.remove();
    deleteBtn.remove();
  };

  todoContainer.addEventListener("click", function () {
    descriptionView.classList.toggle("show");
    dueDateView.classList.toggle("show");
  });

  todoContainer.append(titleView, descriptionView, dueDateView, deleteBtn);

  //render or "append" to ANY element with this paramiter "view".

  const render = (view) => {
    view.append(todoContainer);
  };
  return { render, remove };
}
