import React from "react";
import Card from "react-bootstrap/Card";
import projectData from "./project.json";
import { Contextreact } from "./Context";
import {useEffect, useContext } from "react";
import { IoLogoGithub } from "react-icons/io";


const Projects = () => {

  const { setScroll } = useContext(Contextreact);
 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
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
  }, [setScroll]); 
  return (
    <div className="projectcontainer">
      {projectData.map((project) => (
        <Card key={project.id} className="cardstyle">
          <Card.Header className="project-title">{project.title}</Card.Header>
          <Card.Body
            className="projectbody"
            style={{ backgroundColor: project.bgcolor }}
          >
            <Card.Title>
              {project.tech.map((technology, index) => (
                <span key={index}>
                  {technology}
                  {index !== project.tech.length - 1 ? "," : ""}{" "}
                </span>
              ))}
            </Card.Title>
            <Card.Text>{project.description}</Card.Text>
          </Card.Body>
          <div
            style={{
              paddingTop: "1rem",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <a
              className="project-button"
              href={project.codelink}
              target="_blank"
              rel="noreferrer"
            >
              View Code <IoLogoGithub />


            </a>
            {project.applink && (
              <a
                className="project-button"
                href={project.applink}
                target="_blank"
                style={{ float: "right" }}
                rel="noreferrer"
              >
               Try the App.
              </a>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
