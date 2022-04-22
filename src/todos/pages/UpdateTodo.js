import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Modal, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useHttpClient } from "../../shared/hooks/http-hook";

import "./UpdateTodo.css";

const UpdateTodo = () => {
  const todoId = useParams().todoId;
  const todoName = useParams().todoName;
  const [enteredName, setEnteredName] = useState(todoName);
  const [error, setError] = useState(false);
  const { isLoading, errorMessage, show, sendRequest, setShow } =
    useHttpClient();
  const navigate = useNavigate();

  const todoChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0) {
      setError(true);
      return;
    }

    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/todos/${todoId}`,
        "PATCH",
        JSON.stringify({
          name: enteredName,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      setError(false);
      setEnteredName("");
      navigate("/folders");
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Error Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <form
        onSubmit={submitHandler}
        className="border p-3 shadow update-todo-form"
      >
        <h5>Editing Task "{todoName}"</h5>
        <div className="row">
          <div className="col-12 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Edit Task"
              onChange={todoChangeHandler}
              value={enteredName}
            />
            {error && (
              <small className="text-danger">
                Todo's input cannot be empty.
              </small>
            )}
          </div>
          <div className="col-auto">
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading && (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="me-2"
                />
              )}
              Save
            </Button>
          </div>
          <div className="col-auto">
            <button type="button" className="btn btn-primary">
              <Link to={"/folders"} className="text-reset text-decoration-none">
                Cancel
              </Link>
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default UpdateTodo;
