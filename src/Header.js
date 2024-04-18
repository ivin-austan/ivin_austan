import React from 'react';
import { Container, Navbar, Col } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <Navbar fixed="top" style={{backgroundColor:"white"}}>
        <Container>
            <Col md={2} style={{textAlign:'right', paddingRight:'2rem'}}>
              <FaRegUser style={{ fontSize: "34px" }} />
            </Col>
            <Col md={4} className="name">
              Ivin Austan
            </Col>
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
    </>
  );
}

export default Header;