import React, { useState, useContext } from "react";

import { AuthContext } from "../../shared/context/auth-context";

const Auth = () => {
  const auth = useContext(AuthContext);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value.trim());
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value.trim());
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      setError(true);
      return;
    }

    setError(false);
    auth.login();
  };

  return (
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
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </div>
      {error && (
        <small className="text-danger">All input must be filled.</small>
      )}
    </form>
  );
};

export default Auth;
