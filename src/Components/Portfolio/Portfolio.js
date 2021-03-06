/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Portfolio.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import Vext from "../../images/Speech-to-text.png";
import Initab from "../../images/Initab.png";
import CityStage from "../../images/losangelesst.jpg";
import Fitness from "../../images/fitness.jpg";
import JobPortal from "../../images/job-portal.jpg";
import Notes from "../../images/notes.png";

const ProjectCard = props => {
  return (
    <Card className="my-3">
      <Card.Img
        variant="top"
        src={props.imageSrc}
        width="150px"
        height="200px"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="text-left">{props.text}</Card.Text>

        <a href={props.link} variant="primary" className="d-flex">
          {/* <a href="https://github.com/Hemlatab" target="_blank"> */}
          View Project on
          <i className="fab fa-github-alt fa-fw-project ml-2"></i>
          {/* </a> */}
        </a>
      </Card.Body>
    </Card>
  );
};
const Portfolio = () => {
  return (
    <section className="wrapper" id="portfolio">
      <h1 className="title">My latest Projects</h1>
      <h4>Take a look at some of my personal learning projects</h4>
      <Container className="py-5">
        <Row className="mx-auto">
          <Col lg={4}>
            <ProjectCard
              imageSrc={Vext}
              title="Voice Recognition Tool"
              text="Vext uses the Web Speech API, that transcribes your voice and it works on Chrome."
              tags="React, CSS"
              link=" http://chingu-v9-geckos-04.netlify.com"
            />
          </Col>

          <Col lg={4}>
            <ProjectCard
              imageSrc={Initab}
              title="Initab Clone"
              text="Initab landing page as a solo Pre-Work project for Chingu's 9th Voyage. Technologies used: HTML, CSS, JSON"
              tags="JSON, HTML, CSS"
              link="https://hemlatab.github.io/-Landing-Page---Initab/"
            />
          </Col>

          <Col lg={4}>
            <ProjectCard
              imageSrc={Notes}
              title="Digital Journal"
              text=" Simple web application that allows users to register, login, and maintain personal notes."
              tags="React, CSS"
              link="#"
            />
          </Col>

          <Col lg={4}>
            <ProjectCard
              imageSrc={Fitness}
              title="Fitness Tracker"
              text="Simple Fitness Tracker application - provides diet plans and information based on survey filled by people."
              tags="PHP, Bootstrap, HTML, CSS"
              link="#"
            />
          </Col>

          <Col lg={4}>
            <ProjectCard
              imageSrc={JobPortal}
              title="Job Portal"
              text="Simple web application to facilitate recruitment bringing employees and employer in one platform."
              tags="PHP, HTML, CSS"
              link="#"
            />
          </Col>

          <Col lg={4}>
            <ProjectCard
              imageSrc={CityStage}
              title="City Stage"
              text="City Stage is a simple web application to finding new uses for city street and creating spaces for communities."
              tags="React, CSS"
              link="https://hemlatab.github.io/City-Stage/"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
