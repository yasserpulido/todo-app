import React from "react";

import TodoItem from "./TodoItem";

const TodoList = (props) => {
  if (props.items.length === 0) {
    return <p>No todos found.</p>;
  }

  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} id={item.id} todo={item.todo} />
      ))}
    </ul>
  );
};

export default TodoList;
