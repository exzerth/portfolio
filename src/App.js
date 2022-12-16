import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
