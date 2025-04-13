import { useRef } from "react";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();


  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDateRaw = dueDateElement.current.value;

    let formattedDate = "";
    if (dueDateRaw) {
      const dateObj = new Date(dueDateRaw);
      const day = String(dateObj.getDate()).padStart(2, "0");
      const month = String(dateObj.getMonth() + 1).padStart(2, "0");
      const year = dateObj.getFullYear();
      formattedDate = `${day}-${month}-${year}`;
    }
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, formattedDate);
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleAddButtonClicked} className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            required
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} required />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success kg-button"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
