export function createProject(name, todoItems = []) {
  const getName = () => {
    return name;
  };

  const getItems = () => {
    return todoItems;
  };
  return { getName, getItems };
}
