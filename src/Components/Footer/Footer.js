/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="wrapper">
      <div class="footer-container">
        <h2>Follow me on : </h2>
        <ul class="social-links">
          <li>
            <a href="https://github.com/Hemlatab" target="_blank">
              <i class="fab fa-github-alt fa-fw"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hemlatabhundhoo/"
              target="_blank"
            >
              <i class="fab fa-linkedin-in fa-fw"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/hmlata" target="_blank">
              <i class="fab fa-twitter fa-fw"></i>
            </a>
          </li>
        </ul>
        <p class="footer-section">
          Made with <span class="icon-heart">&#9829;</span> by{" "}
          <a
            class="github-footer"
            href="https://github.com/Hemlatab"
            target="_blank"
          >
            Hemlata Bhundhoo
          </a>
        </p>
        <p>Copyright &copy; 2019.</p>
      </div>
    </section>
  );
};

export default Footer;
