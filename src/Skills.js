import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { FaJs } from "react-icons/fa";
import {  SiMysql,SiJira } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IoLogoGithub } from "react-icons/io";
import { SiJquery } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";


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
            <ProgressBar  now={php} label={`${php}%`} visuallyHidden />
          </div>
          <div className="progresscontainer">
            <h6>jQuery</h6>
            <h6>{jquery}%</h6>
          </div>
          <div className="pr-bar">
            <ProgressBar
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
              now={MySQL}
              label={`${MySQL}%`}
              visuallyHidden
            />
          </div>
        </Col>
      </Row>
      {/* <div style={{marginTop:"4rem", marginLeft:'20rem'}}>
        <Row>
        <Col md={1}>
        <FaReact style={{fontSize:'2rem'}}/>
        </Col>
        <Col md={1}>
        <SiRedux style={{fontSize:'2rem'}}/>
        </Col>

        <Col md={1}>
        <FaNode style={{fontSize:'2rem'}}/>
        </Col>
        <Col md={1}>
        <SiSocketdotio style={{fontSize:'2rem'}}/>
        </Col>
        <Col md={1}>
        <FaPhp style={{fontSize:'2rem'}}/>
        </Col>
        <Col md={1}>
        <DiCodeigniter style={{fontSize:'2rem'}} />
        </Col>
        <Col md={1}>
        <FaJs style={{fontSize:'2rem'}}/>
        </Col>
        <Col md={1}>
        <SiJquery style={{fontSize:'2rem'}}/>
        </Col>
        <Col md={1}>
        <SiMysql style={{fontSize:'2rem'}}/>
        </Col>
        <Col md={1}>
        <DiMongodb style={{fontSize:'2rem'}}/>
        </Col>
        </Row>
    </div> */}
    {/* <div>
        <Row  style={{marginTop:"4rem", marginLeft:'15rem'}}>
        <Col md={2}>
        <FaHtml5 style={{fontSize:'2rem'}}/>
        </Col>
        <Col md={2}>
        <FaLinux style={{fontSize:'2rem'}}/>
        </Col>
        <Col md={2}>
        <FaBootstrap style={{fontSize:'2rem'}}/>
        </Col>
        <Col md={2}>
        <FaDocker style={{fontSize:'2rem'}}/>
        </Col>
        <Col md={2}>
        <IoLogoGithub  style={{fontSize:'2rem'}}  />
        </Col>
        <Col md={2}>
        <SiJira style={{fontSize:'2rem'}}/>
        </Col>
        </Row>
        </div> */}
     
    </div>
  );
};

export default MySkills;
