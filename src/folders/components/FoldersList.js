import React from "react";

import FolderItem from "./FolderItem";

const TodoList = (props) => {

  const toggleFetchHandler = (toggleFetch) => {
    props.setToggleFetch(true);
  }

  if (props.items.length === 0) {
    return <p>No folders found.</p>;
  }

  return (
    <ul>
      {props.items.map((item) => (
        <FolderItem key={item.id} id={item.id} name={item.name} toggleFetchHandler={toggleFetchHandler} />
      ))}
    </ul>
  );
};

export default TodoList;
