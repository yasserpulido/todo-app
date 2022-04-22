import React, { useContext } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
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
              <Button onClick={auth.logout} variant="link" className="text-reset text-decoration-none">
                Logout
              </Button>
            </Nav>
          </Container>
        </Navbar>
      )}
    </header>
  );
};

export default MainNav;
