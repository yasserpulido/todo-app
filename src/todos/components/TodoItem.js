import React from "react";

const TodoItem = (props) => {
  return (
    <li className="row">
      <div className="col-2">
        <input type="checkbox" value="" id="checkTodo" />
      </div>
      <div className="col-6">{props.todo}</div>
      <div className="col-2">
        <a href="/#">Edit</a>
      </div>
      <div className="col-2">
        <a href="/#">Remove</a>
      </div>
    </li>
  );
};

export default TodoItem;
