import React from "react";
import { useState } from "react";

const NewTodo = () => {
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
    <form onSubmit={submitHandler}>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="New Task"
            onChange={todoChangeHandler}
            value={enteredTodo}
          />
          {error && (
            <small className="text-danger">Todo's input cannot be empty.</small>
          )}
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewTodo;
