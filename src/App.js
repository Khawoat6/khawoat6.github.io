/* function App() {
  return (
    <div className="App">
      <h1>Hello Oat Phattaraphon</h1>
    </div>
  );
}

export default App; */

/* import styled from 'styled-components'; */
import React from "react";

// IMPORT COMPONENTS
import Navbar from "./components/Navbar";
//import Section from "./components/Section";
import About from "./components/Section";
import Hero from "./components/sections/Hero";

import dummyText from "./components/DummyText";

// IMPORT STYLE
import './assets/sass/_main.scss';

function App() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <About
          title="About"
          subtitle={dummyText}
          dark={true}
          id="about"
        />
        <About
          title="Experience"
          subtitle={dummyText}
          dark={false}
          id="experience"
        />
        <About
          title="Work"
          subtitle={dummyText}
          dark={true}
          id="work"
        />
        <About
          title="Contact"
          subtitle={dummyText}
          dark={false}
          id="contact"
        />
      </div>
    );
}

export default App;