export function createProjectView(items) {
  const proview = document.createElement("div");
  proview.classList.add("prolist");
  proview.append(items);
}

return { createProjectView };
