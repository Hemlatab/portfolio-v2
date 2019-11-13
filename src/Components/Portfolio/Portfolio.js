import React from "react";
import "./Portfolio.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import ProjectImage from "../../images/project.jpg";
import Vext from "../../images/Speech-to-text.png";
import Initab from "../../images/Initab.png";
import CityStage from "../../images/losangelesst.jpg";

const ProjectCard = props => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={props.imageSrc}
        width="150px"
        height="200px"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="text-left">{props.text}</Card.Text>
        View Project on
        <a href={props.link} variant="primary">
          <a href="https://github.com/Hemlatab" target="_blank">
            <i class="fab fa-github-alt fa-fw"></i>
          </a>
        </a>
      </Card.Body>
    </Card>
  );
};
const Portfolio = () => {
  return (
    <section className="wrapper">
      <h1 className="project-title">My latest Projects</h1>
      <h4>Take a look at some of my personal learning projects</h4>
      <Container className="py-5">
        <Row className="mx-auto">
          <Col>
            <ProjectCard
              imageSrc={Vext}
              title="Voice Recognition Tool"
              text="Vext uses the Web Speech API, that transcribes your voice to start 'Start Recording' button and it works on Chrome."
              link=" http://chingu-v9-geckos-04.netlify.com"
            />
          </Col>

          <Col>
            <ProjectCard
              imageSrc={Initab}
              title="Initab Clone"
              text="Initab landing page as a solo Pre-Work project for Chingu's 9th Voyage. Technolgies: HTML5, CSS3, JSON and JavaScript."
              link="https://hemlatab.github.io/-Landing-Page---Initab/"
            />
          </Col>

          <Col>
            <ProjectCard
              imageSrc={ProjectImage}
              title="Digital Journal"
              text=" Simple web application that allows users to register, login, and maintain personal notes."
              link="#"
            />
          </Col>

          <Col>
            <ProjectCard
              imageSrc={ProjectImage}
              title="Fitness Tracker"
              text="Simple Fitness Tracker application - provides diet plans and information based on survey filled by people."
              link="#"
            />
          </Col>

          <Col>
            <ProjectCard
              imageSrc={ProjectImage}
              title="Job Portal"
              text="Simple web application to facilitate recruitment bringing employees and employer in one platform."
              link="#"
            />
          </Col>

          <Col>
            <ProjectCard
              imageSrc={CityStage}
              title="City Stage"
              text="City Stage is a simple web application to finding new uses for city street and creating spaces for communities."
              link="https://hemlatab.github.io/City-Stage/"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
