/* import styled from 'styled-components'; */
import React from 'react';

// IMPORT COMPONENTS
import Navbar from './components/Navbar';
//import Section from "./components/Section";
// import About from './components/Section';
import Hero from './components/sections/Hero';
import About from '../src/components/sections/About';
import Experience from '../src/components/sections/Experience';
import Contact from '../src/components/sections/Contact';
import Education from '../src/components/sections/Education';
import Project from '../src/components/sections/Project';
import Footer from '../src/components/Footer';

import Side from './components/Side';
import Social from './components/Social';

// IMPORT STYLE
import './assets/sass/_main.scss';

// import { Scale } from 'styled-loaders-react';
import img from './assets/images/loading16.gif';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { SidebarData } from './components/SidebarData';
// import { Link } from 'react-router-dom';

import Skills from '../src/components/sections/Skills';

const asyncFunc = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(false), 3000);
  });
};
class App extends React.Component {
  state = {
    data: {},
    country: '',
    isLoaded: true,
  };

  async componentDidMount() {
    const isLoaded = await asyncFunc();
    this.setState({ isLoaded });
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeLisener);
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoaded ? (
          <div className="loading">
            {/* <Scale color="#1544C0" size="60px" duration="1.4s" /> */}
            <img src={img} alt=""/>
          </div>
        ) : (
          <Router>
            <Navbar />
            <div className="side-left">
              <Social />
            </div>
            <div className="side-right">
              <Side />
            </div>
            <Hero />
            <About id="about" />
            <Education id="education"/>
            <Experience id="experience" />
            <Skills id="skills" />
            <Project id="project"/>
            <Contact id="contact" />
            <Footer />
          </Router>
        )}
      </div>
    );
  }
}
export default App;
