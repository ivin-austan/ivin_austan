import React from 'react';
import { SiLinkedin } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { useLocation } from 'react-router-dom';



const Footer = () => {
  const location = useLocation();

  return (
    <div className={`footer ${location.pathname === '/about' ?'stick-bottom':''}`}>
      <div>
        <a
          href="https://rb.gy/yflhxh"
          target="_blank"
          rel="noopener noreferrer"
          className="sm-buttons"
        >
          <FcGoogle className="socialmedia" />
        </a>

        <a
          href="https://www.linkedin.com/in/ivinaustana/"
          target="_blank"
          rel="noopener noreferrer"
          className="sm-buttons"
        >
          <SiLinkedin className="socialmedia" id="linkedin" />
        </a>
        <a
          href="https://www.facebook.com/ivin.austan.7/"
          target="_blank"
          rel="noopener noreferrer"
          className="sm-buttons"
        >
          <FaFacebook className="socialmedia" id="facebook" />
        </a>
        <a
          href="https://www.instagram.com/ivin_ms/"
          target="_blank"
          rel="noopener noreferrer"
          className="sm-buttons"
        >
          <FaInstagram className="socialmedia" id="instagram" />
        </a>
      </div>
      <br />
      <span className="footer-content">
        <FaRegCopyright />All rights reserved.
        Developed by Ivin Austan
      </span>
    </div>
  );
}

export default Footer;