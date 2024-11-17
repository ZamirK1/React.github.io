import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faLockOpen,
  faKey,
  faCartArrowDown,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";

const Nav_bar = () => {
  const total = 25000;
  const token = false;
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Navbar.Brand href="#home"> Pizzeria Mamma Mia</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">
          <FontAwesomeIcon icon={faPizzaSlice} /> Home
        </Nav.Link>
        <Nav.Link href="#features">
          <FontAwesomeIcon icon={token ? faLockOpen : faKey} />{" "}
          {token ? "Profile" : "Login"}
        </Nav.Link>
        <Nav.Link href="#pricing">
          <FontAwesomeIcon icon={token ? faLock : faKey} />{" "}
          {token ? "Logout" : "Register"}
        </Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#pricing">
          <FontAwesomeIcon icon={faCartArrowDown} /> Total: ${total}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Nav_bar;
