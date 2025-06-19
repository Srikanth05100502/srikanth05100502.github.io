import React from "react";
import "./App.css";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Awards from "./components/Awards";

function App() {
  return (
    <div className="container">
      <Header />
      <Summary />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Awards />
    </div>
  );
}

export default App;
