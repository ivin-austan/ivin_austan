import React from "react";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import myresume from "./doc/resume.pdf";
import { FaLinkedin } from "react-icons/fa";


const Content = () => {
  const mytitle = [
    "Ivin Prathish Austan A",
    "Fullstack Developer",
    "Software Engineer",
    "Prompt Engineer",
  ];

  const [title] = useState(mytitle);
  const [titleIndex, setTitleIndex] = useState(0);
  const DowloadResume = () => {
    const filePath = myresume;                     // Path to your resume file in the folder
    const link = document.createElement("a");     // Create an anchor element
    link.href = filePath;
    link.download = `ivin_austan's_resume`;         // Specify the file name for download
    document.body.appendChild(link);                // Append the anchor element to the body
    link.click();                                   // Trigger the click event on the anchor element
    document.body.removeChild(link);                // Remove the anchor element from the body
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % mytitle.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [mytitle.length]);

  return (
    <div>
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
          <a
            href="https://www.linkedin.com/in/ivinaustana/"
            target="_blank"
            rel="noopener noreferrer"
            className="desc linkedin-button"
          >
            <FaLinkedin style={{ marginBottom: "3px" }} />
            &nbsp; Digital portfolio
          </a>
        </Col>
        <Col md={4}>
          <img src="final.png" alt="ivin"  width={300} height={380} style={{marginTop:"15%"}}/>
        </Col>
      </Row>
    </div>
  );
};

export default Content;
