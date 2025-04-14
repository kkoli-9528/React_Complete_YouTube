import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItems: () => { },
  deleteItem: () => { },
});

// todoItemsReducer is a reducer function that takes an action and returns a new state
// It is used to manage the state of todo items in the application
// The reducer function takes the current state and an action as arguments
// and returns a new state based on the action type
const todoItemsReducer = (currentTodoItems, action) => {

  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter((item) => item.name !== action.payload.itemName);
  }
  return newTodoItems;
}

const TodoItemsContextProvider = ({ children }) => {
  // UseReducer is used to manage the state of todo items
  // It takes a reducer function and an initial state as arguments
  // The reducer function takes the current state and an action as arguments
  // and returns a new state based on the action type
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  // AddNewItems function is used to add new items to the todo list
  // It takes the item name and due date as arguments and dispatches an action to the reducer
  // The action type is "NEW_ITEM" and the payload contains the item name and due date
  // The reducer function will then update the state with the new item 
  const addNewItems = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate
      },
    };

    dispatchTodoItems(newItemAction);

    // The following code is commented out because we are using useReducer instead of useState
    // setTodoItems((currValue) => [
    //   ...currValue,
    //   { name: itemName, dueDate: itemDueDate },
    // ]);
  };

  // DeleteItem function is used to delete an item from the todo list
  // It takes the item name as an argument and dispatches an action to the reducer
  // The action type is "DELETE_ITEM" and the payload contains the item name
  // The reducer function will then update the state by filtering out the item with the given name
  // The reducer function will then return the new state without the deleted item
  // The deleteItem function is used to delete an item from the todo list
  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };

    dispatchTodoItems(deleteItemAction);

    // The following code is commented out because we are using useReducer instead of useState
    // const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    // setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItems,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;