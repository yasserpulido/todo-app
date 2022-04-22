import React, { useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth-context";

const MainNav = () => {
  const auth = useContext(AuthContext);

  return (
    <header className="mb-5">
      {auth.isLoggedIn && (
        <Navbar>
          <Container>
            <Nav className="justify-content-end">
              <Link to={"/"} className="text-reset text-decoration-none">
                <strong>TODO</strong>
              </Link>
            </Nav>
            <Nav className="justify-content-end">
              <Link to={"/"} className="text-reset text-decoration-none">
                Logout
              </Link>
            </Nav>
          </Container>
        </Navbar>
      )}
    </header>
  );
};

export default MainNav;
