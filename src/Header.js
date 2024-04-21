import React, { useContext } from 'react';
import { Container, Navbar, Col } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";
import { Contextreact } from './Context';
import { Link } from 'react-router-dom';

const Header = () => {

  const {scroll} = useContext(Contextreact);

  return (
    <>
      <Navbar sticky = 'top' className={scroll ? "navbar scrolled" : "navbar"}>
        <Container>
          <Col md={2} style={{ textAlign: "right", paddingRight: "2rem" }}>
            <FaRegUser style={{ fontSize: "34px" }} />
          </Col>
          <Col md={4} className="name">
            <Link to='/'>Ivin Austan</Link>
          </Col>
          <Col md={1} className="tabs">
            About
          </Col>

          <Col md={1} className="tabs">
            <Link to="/projects">Projects</Link>
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