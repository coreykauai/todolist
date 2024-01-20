export function createProjectView(title) {
  const PROJECT_CONTAINER = document.createElement("div");
  const TITLE_VIEW = document.createElement("h2");

  TITLE_VIEW.textContent = title;

  PROJECT_CONTAINER.classList.add("project-container");
  PROJECT_CONTAINER.append(TITLE_VIEW);

  const render = (view) => {
    view.append(PROJECT_CONTAINER);
  };

  const loadTodoItems = (todoViews) => {
    for (const todoView of todoViews) {
      todoView.render(PROJECT_CONTAINER);
    }
  };
  return { render, loadTodoItems };
}
