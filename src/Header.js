import React, { useContext } from 'react';
import { Container, Navbar, Col } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";
import { Contextreact } from './Context';
import { Link, useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga4';
ReactGA.initialize('G-4X6SK1YDXC');

const Header = () => {

  const {scroll} = useContext(Contextreact);
 const navigate = useNavigate();

 const scrolltoSkillsandnavigate = (section) =>{

  ReactGA.event({
    category: 'Skills',
    action: 'Clicked this button'
  });
  setTimeout(() => {
      scrolltoSkills(section);
    }, 200); // Adjust the delay time as needed

    // Navigate to the home route
    navigate('/', { scrollBehavior: 'smooth' });
  };
 
 
  const scrolltoSkills = (section) => {
    const skillselection =
      section === "achievements"
        ? document.getElementById("achievements")
        : document.getElementById("skills");
    if (skillselection) {
      skillselection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar sticky="top" className={scroll ? "navbar scrolled" : "navbar"}>
        <Container>
          <Col
            md={2}
            className="avoidlinkstyle"
            style={{ textAlign: "right", paddingRight: "2rem" }}
          >
            <Link to="/">
              <FaRegUser style={{ fontSize: "34px" }} />
            </Link>
          </Col>
          <Col md={4} className="avoidlinkstyle">
            <Link to="/">Ivin Austan</Link>
          </Col>
          <Col md={1} className="tabs">
            <Link to="/about">About Me</Link>
          </Col>

          <Col md={1} className="tabs">
            <Link to="/projects">Projects</Link>
          </Col>

          <Col
            md={1}
            className="tabs mobileview"
            onClick={scrolltoSkillsandnavigate}
          >
            Skills
          </Col>
          <Col
            md={1}
            className="tabs mobileview"
            onClick={() => scrolltoSkillsandnavigate("achievements")}
          >
            Recognitions
          </Col>
          <Col md={2} className="tabs"></Col>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;