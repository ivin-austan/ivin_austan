import React, { useContext } from 'react';
import { Container, Navbar, Col } from "react-bootstrap";
import ivin from "./ivin.jpg";
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
  const styles = {
    iconContainer: {
        position: 'relative',
        display: 'inline-block',
        width: '34px', // Adjust size as needed
        height: '34px', // Adjust size as needed
    },
    image: {
        width: '90%',
        height: '100%',
        borderRadius: '50%', // Make the image circular
        objectFit: 'fill',  // Ensure the image covers the element
        position: 'absolute',
        top: '0',
        left: '0',
    },
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
            <div style={styles.iconContainer}>
            <img src={ivin} alt="User" style={styles.image} />
        </div>
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