import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const todos = [
  {
    id: "01",
    todo: "Workout",
    folder: "01",
  },
  {
    id: "02",
    todo: "Do homeworks",
    folder: "02",
  },
  {
    id: "03",
    todo: "Clean the house",
    folder: "02",
  },
  {
    id: "04",
    todo: "Study English",
    folder: "03",
  },
];

const UpdateTodo = () => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [error, setError] = useState(false);

  const todoChangeHandler = (event) => {
    setEnteredTodo(event.target.value.trim());
  };

  const todoId = useParams().todoId;
  const identifiedTodo = todos.find((todo) => todo.id === todoId);
  
  useEffect(() => {
    if (identifiedTodo) {
      setEnteredTodo(identifiedTodo.todo);
    }
  }, [identifiedTodo]);

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

  if (!identifiedTodo) {
    return <div>Could not find todo.</div>;
  }

  return (
    <form onSubmit={submitHandler} className="border p-2">
      <h5>Editing Task "{identifiedTodo.todo}"</h5>
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

export default UpdateTodo;
