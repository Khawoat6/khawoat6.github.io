import React from 'react';
import Slide from 'react-reveal/Slide';

function Hero() {
  return (
    <Slide top cascade>
      <div className="hero">
        <div className="hero-row1">
          <h1>Hi, my name is</h1>
        </div>
        <div className="hero-row2">
          <h1>Oat Phattaraphon.</h1>
        </div>
        <div className="hero-row3">
          <h1>I build things for the web.</h1>
        </div>
        <div className="hero-row4">
          <h1>
            Hi, my nickname is Oat, I'm extremely interested in Data Journalism,
            Data Visualization, Marketing and Design, I believe that Technology
            will help humans be more comfortable and happier.
          </h1>
        </div>
        <div className="hero-row5">
          <a href="mailto:phattaraphon.c@ku.th">Get In Touch</a>
        </div>
      </div>
    </Slide>
  );
}

export default Hero;
