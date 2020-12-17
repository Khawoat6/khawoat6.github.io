import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Archive from '../sections/Archive';
import Fade from 'react-reveal/Slide';

function Project({ id }) {
  return (
    <Fade bottom cascade>
    <section className="project" id={id}>
      <div className="feature-project">
        <div className="feature-project-wrapper">
          <div className="feature-project-title">
            <h2>0.5</h2>
            <h3>Feature Project</h3>
          </div>
          <Fade right cascade>
          <div className="feature-project-details">
          
            <div className="feature-project-details-item">
              <div className="item-show">
                <img src="https://s4.aconvert.com/convert/p3r68-cdx67/abdk0-kxcdj.png" alt=""/>
              </div>
              <div className="item-content">
                <h2>Coronavirus Disease (COVID-19) Dashboard </h2>
                <h3>A group project in Web Application Development class, This site aims to provide a simple tool to track global progress in defeating Covid-19</h3>
              </div>
            </div>
            <div className="feature-project-details-item">
              <div className="item-show">
                <img src="https://s4.aconvert.com/convert/p3r68-cdx67/aigwe-y9kg1.png" alt=""/>
              </div>
              <div className="item-content">
                <h2>SE TO-DO</h2>
                <h3>SE To-Do is an easy-to-use time and task management application that helps you to manage tasks anywhere and anytime, and helps you to perform tasks efficiently.</h3>
              </div>
            </div>
            <div className="feature-project-details-item">
              <div className="item-show">
                <img src="https://s4.aconvert.com/convert/p3r68-cdx67/anqoi-b2743.png" alt=""/>
              </div>
              <div className="item-content">
                <h2>SE TO-DO Landing page </h2>
                <h3>SE To-Do is an easy-to-use time and task management application that helps you to manage tasks anywhere and anytime, and helps you to perform tasks efficiently.</h3>
              </div>
            </div>

          </div>
          </Fade>
        </div>

      </div>
      <div className="other-project">

      </div>
    </section>
    </Fade>
  );
}

export default Project;
