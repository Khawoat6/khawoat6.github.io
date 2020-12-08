/* import styled from 'styled-components'; */
import React from 'react';

// IMPORT COMPONENTS
import Navbar from './components/Navbar';
//import Section from "./components/Section";
import About from './components/Section';
import Hero from './components/sections/Hero';

import dummyText from './components/DummyText';
import Side from './components/Side';

// IMPORT STYLE
import './assets/sass/_main.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Side />

      <About title="About" subtitle={dummyText} dark={true} id="about" />
      <About
        title="Experience"
        subtitle={dummyText}
        dark={false}
        id="experience"
      />
      <About title="Work" subtitle={dummyText} dark={true} id="work" />
      <About title="Contact" subtitle={dummyText} dark={false} id="contact" />
    </div>
  );
}

export default App;
