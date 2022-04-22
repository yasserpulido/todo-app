import React, { useState } from "react";
import { Button, Spinner, Modal } from "react-bootstrap";

import { useHttpClient } from "../../shared/hooks/http-hook";

const NewFolder = (props) => {
  const [enteredFolderName, setEnteredFolderName] = useState("");
  const [error, setError] = useState(false);
  const { isLoading, errorMessage, show, sendRequest, setShow } =
    useHttpClient();

  const folderNameChangeHandler = (event) => {
    setEnteredFolderName(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (enteredFolderName.trim().length === 0) {
      setError(true);
      return;
    }

    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/folders",
        "POST",
        JSON.stringify({
          name: enteredFolderName,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      setError(false);
      setEnteredFolderName("");
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
              placeholder="New Folder"
              onChange={folderNameChangeHandler}
              value={enteredFolderName}
            />
            {error && (
              <small className="text-danger">
                Folder's input cannot be empty.
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

export default NewFolder;
