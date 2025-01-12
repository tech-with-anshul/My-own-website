import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anshul </span>
            from <span className="purple"> Dehradun, India.</span>
            <br />
            I am currently a student at Dev Bhoomi Uttarakhand University,
            <br />
            pursuing a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering.
            <br />Thank you! 😊
  
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Eat ! Code ! Sleep !"{" "}
          </p>
          <footer className="blockquote-footer">Anshul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
