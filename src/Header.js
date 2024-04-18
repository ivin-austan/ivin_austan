import React from 'react';
import { Container, Navbar, Col } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <Navbar fixed="top" style={{backgroundColor:"white"}}>
        <Container>
          <Navbar.Brand>
            <Col md={2}>
              <FaRegUser style={{ fontSize: "34px", textAlign: "right" }} />
            </Col>
          </Navbar.Brand>
          <Navbar.Brand>
            <Col md={4} className="name">
              Ivin Austan
            </Col>
          </Navbar.Brand>
          <Col md={1} className="tabs">
            About
          </Col>
          <Col md={1} className="tabs">
            Projects
          </Col>
          <Col md={1} className="tabs">
            Skills
          </Col>
          <Col md={1} className="tabs">
            Contact
          </Col>
          <Col md={2} className="tabs"></Col>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;