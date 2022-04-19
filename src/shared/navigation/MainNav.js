import React from "react";
import { Nav } from "react-bootstrap";

const MainNav = () => {
  return (
    <header>
      <Nav activeKey="/home" className="justify-content-end mb-5">
        <Nav.Item>
          <Nav.Link href="/home">Authenticate</Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default MainNav;
