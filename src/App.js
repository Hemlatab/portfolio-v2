import React from "react";
import "./App.css";
import MenuBar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <header>
        <MenuBar />
        <Home />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default App;
