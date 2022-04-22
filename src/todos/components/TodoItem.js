import React, { useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useHttpClient } from "../../shared/hooks/http-hook";

const TodoItem = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  const [enteredStatus, setEnteredStatus] = useState();
  const { isLoading, errorMessage, show, sendRequest, setShow } =
    useHttpClient();

  const handleClose = () => setShowAlert(false);
  const handleShow = () => setShowAlert(true);

  const handleRemove = async () => {
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/todos/${props.id}`,
        "DELETE"
      );
      props.toggleFetchHandler(true);
    } catch (err) {}
    handleClose();
  };

  const statusHandler = async (event) => {
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/todos/${props.id}`,
        "PATCH",
        JSON.stringify({
          name: props.name,
          status: event.target.checked,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      setEnteredStatus(event.target.status);
      props.toggleFetchHandler(true);
    } catch (err) {}
  };

  return (
    <React.Fragment>
      {enteredStatus}
      {props.status}
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
      <Modal show={showAlert} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to remove the <strong>{props.name}'s</strong> folder? All
          nested to-dos will delete.{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" disabled={isLoading} onClick={handleRemove}>
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
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
      <li className="row">
        <div className="col-2 d-flex align-items-center">
          <input
            type="checkbox"
            id="checkTodo"
            checked={props.status}
            onChange={statusHandler}
          />
        </div>
        <div className="col-6 d-flex align-items-center">{props.name}</div>
        <div className="col-2 d-flex justify-content-center align-items-center">
          <Button variant="link">
            <Link to={`/todo/${props.name}/${props.id}`}>Edit</Link>
          </Button>
        </div>
        <div className="col-2 d-flex justify-content-center align-items-center">
          <Button variant="link" onClick={handleShow}>
            Remove
          </Button>
        </div>
      </li>
    </React.Fragment>
  );
};

export default TodoItem;
