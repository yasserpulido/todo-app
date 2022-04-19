import React, { useState } from "react";

const EditTodo = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [error, setError] = useState(false);

  const todoChangeHandler = (event) => {
    setEnteredTodo(event.target.value.trim());
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTodo.trim().length === 0) {
      setError(true);
      return;
    }

    setError(false);
    console.log(enteredTodo);
    setEnteredTodo("");
  };

  return (
    <form onSubmit={submitHandler} className="border p-2">
      <h5>Editing Task "task-name"</h5>
      <div className="row">
        <div className="col-12 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Edit Task"
            onChange={todoChangeHandler}
            value={enteredTodo}
          />
          {error && (
            <small className="text-danger">Todo's input cannot be empty.</small>
          )}
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-primary">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditTodo;
