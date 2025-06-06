import { MdDeveloperMode } from "react-icons/md"; 
import { Row, Col } from 'react-bootstrap';
import { FcSupport } from "react-icons/fc";
import { FaLaptopCode } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { TbSchool } from "react-icons/tb";

const Experiences = () => {
  return (
    <div>
      <Row>
        <Col md={6}>
          <h2 className="expe">Experiences</h2>
          <div className="py-5 timeline">
            <ul className="timeline-with-icons">
               <li className="timeline-item mb-5">
                <span className="timeline-icon">
                 <FaLaptopCode />
                </span>
                <h5 className="fw-bold">Software Developer </h5>
               <p className="text-muted mb-1 fw-bold">Galfar Al Misnad Engineering and Contracting W.L.L., Abu Dhabi, UAE </p>
                <p className="text-muted mb-2 fst-italic">
                   May 2025 - Present
                </p>
                <p className="text-muted">
                Responsible for implementing new features 
                and fixing bugs to improve software 
                functionality, performance, and user exp. 
                </p>
              </li>
              <li className="timeline-item mb-5">
                <span className="timeline-icon">
                 <MdDeveloperMode />
                </span>
                <h5 className="fw-bold">Associate Software Engineer</h5>
               <p className="text-muted mb-1 fw-bold">CapeStart Software Private Ltd.</p>
                <p className="text-muted mb-2 fst-italic">
                  September 2021 - May 2025
                </p>
                <p className="text-muted">
                  Experienced Web Developer proficient in HTML, CSS, JavaScript,
                  React JS, Node Js, Express Js, PHP, Codeigniter, jQuery, Ajax,
                  MySQL, Socket.io and Agile project management.
                </p>
              </li>
              <li className="timeline-item mb-5">
                <span className="timeline-icon">
                  <FcSupport />
                </span>
                <h5 className="fw-bold">Product Development Coordinator</h5>
               <p className="text-muted mb-1 fw-bold">CapeStart Software Private Ltd.</p>
              <p className="text-muted mb-2 fst-italic">January 2021 - September 2021</p>
                <p className="text-muted">
                  Resolve analyst and delivery challenges through meticulous
                  file analysis. Implement stringent testing protocols for
                  seamless feature deployment. Masterfully replicate and
                  troubleshoot web app issues for optimal performance. Elevate
                  UX with intuitive features, reducing complexity seamlessly.
                </p>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={6}>
          <h2 className="education">Education</h2>
          <div className="py-5 timeline">
            <ul className="timeline-with-icons">
              <li className="timeline-item mb-5">
                <span className="timeline-icon">
                  <FaUserGraduate />
                </span>
                <h5 className="fw-bold">Bachelor of Engineering</h5>
                <p className="text-muted mb-2 fw-bold">June 2015 - May 2019</p>
                <p className="text-muted">
                  Bachelor's degree in Computer Science and Engineering from St.
                  Joseph College of Engineering in Chennai in 2019 with 7.70
                  CGPA.
                </p>
              </li>
              <li className="timeline-item mb-5">
                <span className="timeline-icon">
                  <IoSchoolSharp /> 
                </span>
                <h5 className="fw-bold">Higher Secondary Certificate</h5>
                <p className="text-muted mb-2 fw-bold">April 2015</p>
                <p className="text-muted">
                  Scored 1140/1200 - 95% (school second)
                </p>
              </li>
              <li className="timeline-item mb-5">
                <span className="timeline-icon">
                  <TbSchool />
                </span>
                <h5 className="fw-bold">
                  Secondary School Leaving Certificate
                </h5>
                <p className="text-muted mb-2 fw-bold">April 2013</p>
                <p className="text-muted">Scored 481/500 - 96.5%</p>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Experiences;
