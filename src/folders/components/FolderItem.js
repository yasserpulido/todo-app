import React from "react";
import { Link } from "react-router-dom";

const TodoItem = (props) => {
  return (
    <li className="row">
      <div className="col-6">{props.todo}</div>
      <div className="col-3">
        <Link to={`/folders/${props.id}/todo`}>View items</Link>
      </div>
      <div className="col-3">
        <a href="/#">Remove</a>
      </div>
    </li>
  );
};

export default TodoItem;
