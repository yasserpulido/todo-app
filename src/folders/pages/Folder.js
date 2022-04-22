import React, { useEffect, useState } from "react";
import { Breadcrumb, Modal, Button, Spinner } from "react-bootstrap";

import FoldersList from "../components/FoldersList";
import NewFolder from "../components/NewFolder";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Folder = () => {
  const [loadedFolders, setLoadedFolders] = useState();
  const [toggleFetch, setToggleFetch] = useState(false);
  const { isLoading, errorMessage, show, sendRequest, setShow } =
    useHttpClient();

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/folders"
        );

        setLoadedFolders(responseData.folders);
        setToggleFetch(false);
      } catch (err) {}
    };
    fetchFolders();
  }, [sendRequest, toggleFetch]);

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
          <Breadcrumb.Item active>
            <strong>Folders</strong>
          </Breadcrumb.Item>
        </Breadcrumb>
        {isLoading && (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" />
          </div>
        )}
        {!isLoading && loadedFolders && <FoldersList items={loadedFolders} setToggleFetch={setToggleFetch} />}
        <NewFolder setToggleFetch={setToggleFetch} />
      </div>
    </React.Fragment>
  );
};

export default Folder;
