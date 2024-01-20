export function createProject(name, todoItems = []) {
  const getName = () => {
    return name;
  };

  const getItems = () => {
    return todoItems;
  };

  const addItem = (item) => {
    todoItems.push(item);
  };

  function logItems() {
    console.log("project items: ", todoItems);
  }

  return { getName, getItems, addItem, logItems };
}
