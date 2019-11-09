import React from "react";
import "./Portfolio.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import ProjectImage from "../../images/project.jpg";

const ProjectCard = props => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.imageSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <a href={props.link} variant="primary">
          Visit Live
        </a>
      </Card.Body>
    </Card>
  );
};
const Portfolio = () => {
  return (
    <section className="wrapper">
      <h1>My latest Projects</h1>
      <Container>
        <Row className="mx-auto">
          <Col>
            <ProjectCard
              imageSrc={ProjectImage}
              title="Voice Recognition Tool"
              text="Vext uses the Web Speech API, that transcribes your voice by just clicking on the 'Start Recording' button and it works on Chrome.."
              link=" http://chingu-v9-geckos-04.netlify.com"
            />
          </Col>

          <Col>
            <ProjectCard
              imageSrc={ProjectImage}
              title="Initab Clone"
              text=" This is a mock Initab landing page as a solo Pre-Work project for Chingu's 9th Voyage. Technolgies used: HTML5, CSS3, JSON and JavaScript."
              link="https://hemlatab.github.io/-Landing-Page---Initab/"
            />
          </Col>

          <Col>
            <ProjectCard
              imageSrc={ProjectImage}
              title="project-title"
              text="Some quick example text to build on the card title and make up the bulk of the card's content."
              link="#"
            />
          </Col>

          <Col>
            <ProjectCard
              imageSrc={ProjectImage}
              title="project-title"
              text="Some quick example text to build on the card title and make up the bulk of the card's content."
              link="#"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
