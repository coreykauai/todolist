import { createProjectView } from "../view/project-view.js";
import { createTodoItemView } from "../view/todo-item-view.js";

export function createProjectController(projectModel) {
  const projectView = createProjectView("yes");
  const todoViews = [];

  for (const todo of projectModel.getItems()) {
    const todoView = createTodoItemView(todo.getTitle(), todo.getDescription());
    todoViews.push(todoView);
  }

  function render(view) {
    projectView.render(view);
    projectView.loadTodoItems(todoViews);
  }

  return { render };
}
