//Brainstorm what kind of properties your todo-items are going to have.
//At a minimum they should have a title, description, dueDate and priority.
//You might also want to include notes or even a checklist.

export function createToDoItem(title, description, dueDate, prior) {
  const setTitle = (newTitle) => {
    if (newTitle.trim() === "") {
      throw new Error("Title must be a nonempty string");
    }
    title = newTitle;
  };

  const getTitle = () => {
    return title;
  };

  const getDescription = () => {
    return description;
  };

  const getDueDate = () => {
    return dueDate;
  };

  return { setTitle, getTitle, getDescription, getDueDate };
}
