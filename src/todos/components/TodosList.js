import React from "react";

import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const toggleFetchHandler = (toggleFetch) => {
    props.setToggleFetch(true);
  };

  if (props.items.length === 0) {
    return <p>No todos found.</p>;
  }

  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          name={item.name}
          status={item.status}
          toggleFetchHandler={toggleFetchHandler}
        />
      ))}
    </ul>
  );
};

export default TodoList;
