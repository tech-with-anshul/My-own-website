import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Weather from "../../Assets/Projects/Weather.png";
import churn from "../../Assets/Projects/churn.png";
import Resume from "../../Assets/Projects/resume.png";
import sorting from "../../Assets/Projects/sorting.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={churn}
              isBlog={false}
              title="Churn Prediction Model"
              description="The telecom industry faces significant challenges in retaining customers, with many customers switching to competitors. This issue, known as customer churn, directly impacts revenue and growth. The goal of this project is to predict which customers are likely to leave the service."
              ghLink="https://github.com/tech-with-anshul/Churn-Prediction-for-a-Telecom-Company"
              demoLink="https://github.com/tech-with-anshul/Churn-Prediction-for-a-Telecom-Company"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Resume}
              isBlog={false}
              title="Visionary Portfolio"
              description="A dynamic personal portfolio showcasing technical skills, innovative projects, certifications, and achievements. This platform highlights expertise in AI/ML, web development, and software engineering, offering a polished and engaging way to connect with professionals and recruiters. With seamless navigation and a professional aesthetic, it’s designed to inspire confidence and foster collaboration."
              ghLink="https://github.com/tech-with-anshul/Web-Resume"
              demoLink="https://web-resume-lime.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="WeatherApp-JS"
              description="A weather application built using Vanilla JavaScript and the OpenWeatherMap API. The app provides current weather details, air quality index, and various additional metrics like humidity, wind speed, visibility, and more. This project demonstrates how to interact with a public API and display dynamic data on a user-friendly interface."
              ghLink="https://github.com/tech-with-anshul/WeatherApp-JS"
              demoLink="https://weather-app-js-cyan.vercel.app/"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sorting}
              isBlog={false}
              title="Sortify: Interactive Sorting Algorithm Visualizer"
              description="A dynamic and interactive web application built with React and Vite that visualizes popular sorting algorithms in action. Watch step-by-step sorting animations, adjust speed and array size, and explore how algorithms like Bubble Sort, Quick Sort, Merge Sort, and more operate. Perfect for learning, teaching, or just enjoying algorithmic magic visually."
              ghLink="https://github.com/tech-with-anshul/Interactive-sorting-algorithm-visualizer"
              demoLink="https://interactive-sorting-algorithm-visualizer.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
