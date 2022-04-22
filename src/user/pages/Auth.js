import React, { useState, useContext } from "react";
import { Button, Spinner, Modal } from "react-bootstrap";

import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Auth = () => {
  const auth = useContext(AuthContext);

  const [enteredEmail, setEnteredEmail] = useState("user@todo.com");
  const [enteredPassword, setEnteredPassword] = useState("testers");
  const [error, setError] = useState(false);
  const { isLoading, errorMessage, show, sendRequest, setShow } = useHttpClient();

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value.trim());
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value.trim());
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      setError(true);
      return;
    }

    try {
      await sendRequest(
        "http://localhost:5000/api/users/login",
        "POST",
        JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      auth.login();
    } catch (error) {}
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
      <form onSubmit={submitHandler} className="border p-3">
        <h5>Hello</h5>
        <hr />
        <div className="row">
          <div className="col-12 mb-2">
            <input
              type="email"
              className="form-control"
              placeholder="E-mail"
              id="email"
              onChange={emailChangeHandler}
              value={enteredEmail}
            />
          </div>
          <div className="col-12 mb-2">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              onChange={passwordChangeHandler}
              value={enteredPassword}
            />
          </div>
        </div>
        <div className="row justify-content-end">
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
              Login
            </Button>
          </div>
        </div>
        {error && (
          <small className="text-danger">All input must be filled.</small>
        )}
      </form>
    </React.Fragment>
  );
};

export default Auth;
