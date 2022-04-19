import React, { useContext } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth-context";

const MainNav = () => {
  const auth = useContext(AuthContext);

  return (
    <header>
      <Nav className="justify-content-between mb-5">
        <Nav.Item>
          {auth.isLoggedIn && (
            <Nav.Link className="text-reset">
              <Link to={"/"} className="text-decoration-none text-reset">
                <strong>TODO</strong>
              </Link>
            </Nav.Link>
          )}
        </Nav.Item>
        <Nav.Item>
          {auth.isLoggedIn && (
            <Nav.Link className="text-reset" onClick={auth.logout}>
              Logout
            </Nav.Link>
          )}
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default MainNav;
