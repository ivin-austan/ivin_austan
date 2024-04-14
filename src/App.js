import { Container, Navbar, Col, Row } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";
import "./styles.css";
import myresume from "./doc/resume.pdf";
import { useEffect, useState } from "react";
import { LuFileSpreadsheet } from "react-icons/lu";

const NavScrollExample = () => {
  const mytitle = [
    "Ivin Prathish Austan A",
    "FrontEnd Developer",
    "Fullstack Developer",
    "Software Engineer",
    "Prompt Engineer",
  ];
  const [title] = useState(mytitle);
  const [titleIndex, setTitleIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % mytitle.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [mytitle.length]);

  const DowloadResume = () => {
    const filePath = myresume; // Path to your resume file in the folder
    const link = document.createElement("a"); // Create an anchor element
    link.href = filePath;
    link.download = `ivin_austan's_resume`; // Specify the file name for download
    document.body.appendChild(link); // Append the anchor element to the body
    link.click(); // Trigger the click event on the anchor element
    document.body.removeChild(link); // Remove the anchor element from the body
  };
  return (
    <div className="content">
      <Navbar style={{ padding: "30px" }}>
        <Container>
          <Navbar.Brand>
            <Col md={2} >
              <FaRegUser style={{ fontSize: "34px",textAlign:"right" }} />
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
      <Row>
        <Col md={8}>
          <p className="intro">Welcome to my portfolio!</p>
          <h1 className="title">
            Hey Folks, I'm{" "}
            <span className="titleupdate"> {title[titleIndex]}</span>
          </h1>
          <h6 className="desc">
            Building a successful product is a challenge. I am highly energetic
            in user experience <br /> design, interfaces and web development.
          </h6>
          <button className="desc resume-button" onClick={DowloadResume}>
            <LuFileSpreadsheet style={{ marginBottom: "3px" }} />
            &nbsp; Download Resume
          </button>
        </Col>
        <Col md={4}>df</Col>
      </Row>
    </div>
  );
};

export default NavScrollExample;
