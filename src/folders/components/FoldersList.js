import React from "react";

import FolderItem from "./FolderItem";

const TodoList = (props) => {
  if (props.items.length === 0) {
    return <p>No folders found.</p>;
  }

  return (
    <ul>
      {props.items.map((item) => (
        <FolderItem key={item.id} id={item.id} todo={item.name} />
      ))}
    </ul>
  );
};

export default TodoList;
