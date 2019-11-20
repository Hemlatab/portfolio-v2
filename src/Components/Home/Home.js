import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="wrapper-home" id="home">
      <div className="home-content">
        <h1 className="intro">
          Hello,
          <br />I am <span className="name">Hemlata Bhundhoo.</span>
          <br />
          Aspiring Frontend Developer
        </h1>
      </div>
    </section>
  );
};

export default Home;
