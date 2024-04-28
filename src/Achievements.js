import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaMedal } from "react-icons/fa6";
import { IoMedalOutline } from "react-icons/io5";
import { LiaMedalSolid } from "react-icons/lia";
import { BiMedal } from "react-icons/bi";
import { GiRibbonMedal } from "react-icons/gi";
import { MdStars } from "react-icons/md";

const Achievements = () => {
  return (
    <div id="achievements">
      <h2 className="achievestyle">ACHIEVEMENTS</h2>
      <h4
        className="myskills"
        style={{ color: "hsl(144.97deg 86.71% 35.31% / 73%)" }}
      >
        RECOGNITIONS
      </h4>
      <br></br>
      <br></br>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="November 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdStars />}
        >
          <h3 className="vertical-timeline-element-title">
            Super Star of the Quarter - Q4 2022
          </h3>
          <h6 className="vertical-timeline-element-subtitle">Capestart</h6>
          <p>
            I'm deeply humbled by the recognition from our company. I am honored
            to receive the "Super Star Award Q4 2022" in recognition of my
            efforts to go above and beyond. Gratitude to CapeStart and all those
            who have generously guided me on this journey. Thank you,
            CapeStart!🎖️❤️
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="December 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<IoMedalOutline />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            SuperStar of the Quarter - Q3 2021
          </h3>
          <h6 className="vertical-timeline-element-subtitle">Capestart</h6>
          <p>
            Being nominated for SuperStar of the Quarter by CapeStart is truly
            humbling. Grateful for the recognition!🌟🏆 Thank you, CapeStart!❤️
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="February 2018"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaMedal />}
        >
          <h3 className="vertical-timeline-element-title">
            Achiever of the year - 2017 - 18
          </h3>
          <h6 className="vertical-timeline-element-subtitle">
            St.Joseph's College of Engineering
          </h6>
          <p>
            Recognized for outstanding academic performance and exemplary
            dedication, awarded the prestigious title of "Achiever of the Year"
            which signifies a commitment to excellence, relentless goal pursuit,
            and a passion for improvement. 🏆💖
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="February 2017"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BiMedal />}
        >
          <h3 className="vertical-timeline-element-title">
            Achiever of the year - 2016 - 17
          </h3>
          <h6 className="vertical-timeline-element-subtitle">
            St.Joseph's College of Engineering
          </h6>
          <p>
            Recognized for exceptional academic achievements and unwavering
            dedication, honored with the esteemed title of "Achiever of the
            Year," symbolizing a steadfast commitment to excellence, tireless
            pursuit of goals, and a fervent drive for advancement. 🎉🏆💖
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="August 2017"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GiRibbonMedal />}
        >
          <h3 className="vertical-timeline-element-title">
            Winner in Webpage Desining - SINTACS’17
          </h3>
          <h6 className="vertical-timeline-element-subtitle">
            Sri Sai Ram Institute of Technology
          </h6>
          <p>
            Bagged the second position in web designing held at the esteemed
            SINTACS’17 symposium hosted by Valliammai College of Engineering.
            Grateful to my college for providing the platform to showcase my
            talent in webpage designing. ❤️🏆
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="July 2017"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdStars />}
        >
          <h3 className="vertical-timeline-element-title">
            First Position in Web Desining
          </h3>
          <h6 className="vertical-timeline-element-subtitle">
            St.Joseph's College Of Engineering
          </h6>
          <p>
            Achieved the first position in the web designing competition at the
            Intra-Departmental symposium hosted by St. Joseph's College of
            Engineering. Grateful to my college for providing the opportunity to
            showcase my talent in webpage designing. ❤️🏆
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="August 2016"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<LiaMedalSolid />}
        >
          <h3 className="vertical-timeline-element-title">
            Winner in Webpage Designing - CYBORS 2k16
          </h3>
          <h6 className="vertical-timeline-element-subtitle">
            Valliammai Engineering College (SRM)
          </h6>
          <p>
            Secured second place in web designing which was held at prestigious
            symposium - CYBORS 2k16 in Valliammai College of Engineering. Thanks
            to my college which provides me to get the opportunity and to
            showcase my talent in webpage designing. ❤️🏆
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="April 2015"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BiMedal />}
        >
          <h3 className="vertical-timeline-element-title">
            Second Highest Score at the school level - HSC (1140/1200)
          </h3>
          <h6 className="vertical-timeline-element-subtitle">
            Carmel Higher Secondary School
          </h6>
          <p>
            Securing the second-highest score in Higher Secondary School with
            1140 out of 1200 reflects the culmination of my hard work and the
            guidance of my teachers. This achievement brings pride to our
            parents, school, and village. Grateful to all the teachers whose
            guidance was instrumental in this accomplishment. 🏆💖
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<IoMedalOutline />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Achievements;
