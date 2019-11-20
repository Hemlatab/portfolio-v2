/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="wrapper" id="about">
      <h1>About me</h1>
      <p className="about-me">
        A self-taught, self-motivated, creative, and ambitious IT professional
        <br />
        with proficiency in React, PHP, SQL, JavaScript, HTML and CSS.
      </p>

      <p className="about-me">
        I can communicate effectively in a team setting, and possessing
        <br />
        strong skills and ability in writing clean and efficient code,
        <br />
        seeks to apply for the position Front End Developer.
      </p>
      <p className="about-me">
        You can view my code on GitHub
        <a href="https://github.com/Hemlatab" target="_blank">
          <i class="fab fa-github-alt fa-fw-about"></i>
        </a>
      </p>
    </section>
  );
};

export default About;
