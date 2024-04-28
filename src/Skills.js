import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

const MySkills = () => {
  const html = 90;
  const css = 75;
  const react = 75;
  const node = 65;
  const express = 65;
  const php = 80;
  const jquery = 75;
  const Ajax = 80;
  const JavaScript = 80;
  const Codeigniter = 85;
  const MongoDB = 80;
  const MySQL = 80;
  
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
            href="https://wa.link/2l2nui"
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
            <h6>85%</h6>
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
            <h6>85%</h6>
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
            <h6>75%</h6>
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
            <h6>75%</h6>
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
            <h6>90%</h6>
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
            <h6>85%</h6>
          </div>
          <div className="pr-bar">
            <ProgressBar animated now={php} label={`${php}%`} visuallyHidden />
          </div>
          <div className="progresscontainer">
            <h6>jQuery</h6>
            <h6>80%</h6>
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
            <h6>85%</h6>
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
            <h6>80%</h6>
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
            <h6>90%</h6>
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
            <h6>85%</h6>
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
            <h6>85%</h6>
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
