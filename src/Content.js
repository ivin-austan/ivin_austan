import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { Contextreact } from "./Context";
import { Typewriter } from 'react-simple-typewriter';
import { DownloadResume } from "./utility_helper/DownloadResume";

const Content = () => {
  const mytitle = [
    "Ivin Prathish Austan A",
    "Fullstack Developer",
    "Software Engineer",
    "Prompt Engineer",
  ];
  const { setScroll } = useContext(Contextreact);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScroll]); // Include setScroll in the dependency array

  return (
    <div>
      <Row>
        <Col md={8}>
          <h5 className="intro">Welcome to my portfolio!</h5>
          <h1 className="title">
            Hey Folks, I'm{" "}
            <span className="titleupdate">
              <Typewriter words={mytitle.map((title)=>title
              )}
              loop={false}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              />
            </span>
          </h1>
          <h6 className="desc">
            Building a successful product is a challenge. I am highly energetic
            in user experience design, interfaces and web development.
          </h6>

          <button className="desc resume-button" onClick={DownloadResume}>
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
          <img
            src="final.png"
            alt="ivin"
            width={300}
            height={380}
            style={{ marginTop: "15%" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Content;
