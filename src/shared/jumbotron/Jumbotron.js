import React from "react";
import { Link } from "react-router-dom";

const Jumbotron = () => {
  return (
    <div className="shadow p-5 rounded border">
      <h1>Welcome to TODO</h1>
      <p>TODO is a MERN application to manage todos.</p>
      <Link to={"/folders"}>Click here to manage.</Link>
    </div>
  );
};

export default Jumbotron;
