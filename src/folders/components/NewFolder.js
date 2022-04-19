import React, { useState } from "react";

const NewFolder = () => {
  const [enteredFolderName, setEnteredFolderName] = useState("");
  const [error, setError] = useState(false);

  const folderNameChangeHandler = (event) => {
    setEnteredFolderName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredFolderName.trim().length === 0) {
      setError(true);
      return;
    }

    setError(false);
    console.log(enteredFolderName);
    setEnteredFolderName("");
  };

  return (
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
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewFolder;
