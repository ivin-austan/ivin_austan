import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

const MySkills = () => {

  const html = 80;
  const css = 65;
  const react = 65;
  const node = 60;
  const express = 60;
  const php = 70;
  const jquery = 65;
  const Ajax = 70;
  const JavaScript = 65;
  const Codeigniter = 75;
  const MongoDB = 55;
  const MySQL = 75;
  
  return (
    <div id="skills">
      <Row>
        <Col md={8}>
          {" "}
          <h2 className="skills">
            SKILLS
          </h2>
        </Col>
        <Col md={4} className="hireme">
          <Button
            variant="success"
            className="contactme"
            href="https://wa.link/s5a0k0"
          >
            Contact Me
          </Button>
        </Col>
      </Row>
      <h4 className="myskills">MY SKILLS</h4>
      <Row className="skillcontainer">
        <Col md={4} className="skillsprogress">
          <div className="progresscontainer">
            <h6>React.js</h6>
            <h6>{react}%</h6>
          </div>
          <div className="pr-bar">
            <ProgressBar
              animated
              now={react}
              label={`${react}%`}
              visuallyHidden
            />
          </div>
          <div className="progresscontainer">
            <h6>Express.js</h6>
            <h6>{express}%</h6>
          </div>
          <div className="pr-bar">
            <ProgressBar
              animated
              now={express}
              label={`${express}%`}
              visuallyHidden
              variant="info"
            />
          </div>
          <div className="progresscontainer">
            <h6>Node.js</h6>
            <h6>{node}%</h6>
          </div>
          <div className="pr-bar">
            <ProgressBar
              animated
              now={node}
              label={`${node}%`}
              visuallyHidden
            />
          </div>
          <div className="progresscontainer">
            <h6>MongoDB</h6>
            <h6>{MongoDB}%</h6>
          </div>
          <div className="pr-bar">
            <ProgressBar
              animated
              now={MongoDB}
              label={`${MongoDB}%`}
              visuallyHidden
              variant="success"
            />
          </div>
        </Col>
        <Col md={4} className="skillsprogress">
          <div className="progresscontainer">
            <h6>Codeigniter</h6>
            <h6>{Codeigniter}%</h6>
          </div>
          <div className="pr-bar">
            <ProgressBar
              animated
              now={Codeigniter}
              label={`${Codeigniter}%`}
              visuallyHidden
              variant="info"
            />
          </div>
          <div className="progresscontainer">
            <h6>PHP</h6>
            <h6>{php}%</h6>
          </div>
          <div className="pr-bar">
            <ProgressBar animated now={php} label={`${php}%`} visuallyHidden />
          </div>
          <div className="progresscontainer">
            <h6>jQuery</h6>
            <h6>{jquery}%</h6>
          </div>
          <div className="pr-bar">
            <ProgressBar
              animated
              now={jquery}
              label={`${jquery}%`}
              visuallyHidden
              variant="success"
            />
          </div>
          <div className="progresscontainer">
            <h6>Ajax</h6>
            <h6>{Ajax}%</h6>
          </div>
          <div className="pr-bar">
            <ProgressBar
              animated
              now={Ajax}
              label={`${Ajax}%`}
              visuallyHidden
            />
          </div>
        </Col>
        <Col md={4} className="skillsprogress">
          <div className="progresscontainer">
            <h6>JavaScript</h6>
            <h6>{JavaScript}%</h6>
          </div>
          <div className="pr-bar">
            <ProgressBar
              animated
              now={JavaScript}
              label={`${JavaScript}%`}
              visuallyHidden
              variant="success"
            />
          </div>
          <div className="progresscontainer">
            <h6>HTML</h6>
            <h6>{html}%</h6>
          </div>
          <div className="pr-bar">
            <ProgressBar
              animated
              now={html}
              label={`${html}%`}
              visuallyHidden
            />
          </div>
          <div className="progresscontainer">
            <h6>CSS</h6>
            <h6>{css}%</h6>
          </div>
          <div className="pr-bar">
            <ProgressBar
              animated
              now={css}
              label={`${css}%`}
              visuallyHidden
              variant="secondary"
            />
          </div>
          <div className="progresscontainer">
            <h6>MySQL</h6>
            <h6>{MySQL}%</h6>
          </div>
          <div className="pr-bar">
            <ProgressBar
              animated
              now={MySQL}
              label={`${MySQL}%`}
              visuallyHidden
            />
          </div>
        </Col>
      </Row>
      <span className="loadingexp">
        * I've incorporated loading bars as I hone my skills in achieving fully
        filled progress bars
      </span>
    </div>
  );
};

export default MySkills;
