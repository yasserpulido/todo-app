import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const TodoItem = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose}>
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
          <Button variant="danger" onClick={handleClose}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
      <li className="row">
        <div className="col-6">{props.name}</div>
        <div className="col-3">
          <Button variant="link">
            <Link to={`/folders/${props.id}`}>View items</Link>
          </Button>
        </div>
        <div className="col-3">
          <Button variant="link" onClick={handleShow}>
            Remove
          </Button>
        </div>
      </li>
    </React.Fragment>
  );
};

export default TodoItem;
