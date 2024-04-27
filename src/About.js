import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import aboutData from "./about.json";

const About = () => {
  const pairs = [];
  for (let i = 0; i < aboutData.length; i += 2) {
    if (i + 1 < aboutData.length) {
      pairs.push([aboutData[i], aboutData[i + 1]]);
    } else {
      pairs.push([aboutData[i]]);
    }
  }

  const calculateAge = () => {
    const currentDate = new Date();
    const BirthDay = new Date("1998-01-23T00:00:00");
    const carrerstart = new Date("2021-01-25T00:00:00");
    const timeDifference = currentDate.getTime() - BirthDay.getTime();
    const timeDifferenceforcarrer =
      currentDate.getTime() - carrerstart.getTime();
   

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const daysDifference = Math.floor(timeDifference / millisecondsPerDay);
    const carrerperiod = Math.floor(
      timeDifferenceforcarrer / millisecondsPerDay
    );

    const yearsDiff = Math.floor(daysDifference / 365);
    const remainingDays = daysDifference % 365;
    const carreryearsDiff = Math.floor(carrerperiod / 365);
    const carrerremainingDays = carrerperiod % 365;
    const monthsDifference = Math.floor(remainingDays / 30);
    const carrermonthsDiff = Math.floor(carrerremainingDays / 30);

    return {
      years: yearsDiff,
      month: monthsDifference,
      carrerexp: carreryearsDiff,
      carrermonth: carrermonthsDiff,
    };
  };

  const calc = calculateAge();

  return (
    <Container>
      <Row>
        <Col md={8}>
          <div className="bio">
            <h4 className="biointro">
              Fullstack Developer - React.js, PHP and Node.js
            </h4>
            <span className="biocontent">
              3+ years experience in Web development in Emerging Technologies.
            </span>
            {pairs.map((pair, index) => (
              <div key={index}>
                <Row style={{ paddingBottom: "1rem" }}>
                  {pair.map(
                    (
                      item,
                      index //or can destruct directly as { label, value }
                    ) => (
                      <React.Fragment key={index}>
                        <Col md={2}>{item.label}:</Col>
                        <Col md={4} style={{ fontWeight: "600" }}>
                          {item.label === "Age"
                            ? `${calc.years} years ${calc.month} months`
                            : item.label === "Experience"
                            ? `${calc.carrerexp} years ${calc.carrermonth} months`
                            : item.value}
                        </Col>
                      </React.Fragment>
                    )
                  )}
                </Row>
              </div>
            ))}
          </div>
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
    </Container>
  );
};

export default About;
