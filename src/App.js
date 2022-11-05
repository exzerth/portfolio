import React from "react";
import "./main.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Testimonial from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Hero />
        <Skills />
        <Works />
        <Testimonial />
        <Footer />
      </header>
    </div>
  );
}

export default App;
