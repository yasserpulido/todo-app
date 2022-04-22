import React, { useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";

import { useHttpClient } from "../../shared/hooks/http-hook";

const NewTodo = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [error, setError] = useState(false);
  const { isLoading, errorMessage, show, sendRequest, setShow } =
    useHttpClient();

  const todoChangeHandler = (event) => {
    setEnteredTodo(event.target.value.trim());
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (enteredTodo.trim().length === 0) {
      setError(true);
      return;
    }

    try {
      await sendRequest(
        "http://localhost:5000/api/todos",
        "POST",
        JSON.stringify({
          name: enteredTodo,
          folder: props.folderId,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      console.log("newtodo");
      setError(false);
      setEnteredTodo("");
      props.setToggleFetch(true);
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
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="New Task"
              onChange={todoChangeHandler}
              value={enteredTodo}
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
              Add
            </Button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default NewTodo;
