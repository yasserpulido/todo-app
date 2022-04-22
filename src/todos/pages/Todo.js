import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Modal, Button, Spinner, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

import TodosList from "../components/TodosList";
import NewTodo from "../components/NewTodo";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Todo = () => {
  const folderId = useParams().folderId;
  const folderName = useParams().folderName;
  const [toggleFetch, setToggleFetch] = useState(false);
  const [loadedTodos, setLoadedTodos] = useState();
  const { isLoading, errorMessage, show, sendRequest, setShow } =
    useHttpClient();

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/todos/${folderId}`
        );

        console.log("todo");
        console.log(responseData.todos);
        setLoadedTodos(responseData.todos);
        setToggleFetch(false);
      } catch (err) {}
    };
    fetchFolders();
  }, [sendRequest, toggleFetch, folderId]);

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
      <div className="border p-3">
        <Breadcrumb>
          <Breadcrumb.Item as="div" active>
            <Link to={"/folders"} className="text-reset text-decoration-none">
              <strong>Folders</strong>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item as="div" active>
            {folderName}
          </Breadcrumb.Item>
        </Breadcrumb>
        {isLoading && (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" />
          </div>
        )}
        {!isLoading && loadedTodos && (
          <TodosList items={loadedTodos} setToggleFetch={setToggleFetch} />
        )}
        <NewTodo folderId={folderId} setToggleFetch={setToggleFetch} />
      </div>
    </React.Fragment>
  );
};

export default Todo;
