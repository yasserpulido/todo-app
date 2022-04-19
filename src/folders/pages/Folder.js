import React from "react";
import { Breadcrumb } from "react-bootstrap";

import FoldersList from "../components/FoldersList";
import NewFolder from "../components/NewFolder";

const Folder = () => {
  const foldersList = [
    {
      id: "01",
      name: "Workout",
    },
    {
      id: "02",
      name: "Daily Task",
    },
    {
      id: "03",
      name: "Important",
    },
  ];

  return (
    <div className="border container p-3">
      <Breadcrumb>
        <Breadcrumb.Item href="#" active><strong>Folders</strong></Breadcrumb.Item>
      </Breadcrumb>
      <FoldersList items={foldersList} />
      <NewFolder />
    </div>
  );
};

export default Folder;
