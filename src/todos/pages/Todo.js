import React from "react";
import { useParams } from "react-router-dom";

import TodosList from "../components/TodosList";
import NewTodo from "../components/NewTodo";

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

const Todo = () => {
  const folderId = useParams().folderId;
  const todosList = todos.filter((item) => item.folder === folderId);

  return (
    <div className="border container p-3">
      <h5>
        <strong>To-Do List</strong>
      </h5>
      <TodosList items={todosList} />
      <NewTodo />
    </div>
  );
};

export default Todo;
