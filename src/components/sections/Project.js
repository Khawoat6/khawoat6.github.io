import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Archive from '../sections/Archive';
import Fade from 'react-reveal/Slide';
import * as AiIcons from 'react-icons/ai';
import * as VscIcons from 'react-icons/vsc';

function Project({ id }) {
  return (
    <Fade bottom cascade>
    <section className="project" id={id}>
      <div className="feature-project">
        <div className="feature-project-wrapper">
          <div className="feature-project-title">
            <h2>05.</h2>
            <h3>Feature Project</h3>
          </div>
          <div className="feature-project-details">
          <Fade right cascade>
          
            <div className="feature-project-details-item">
              <div className="item-show">
                <img src="https://i.ibb.co/c259gny/smartmockups-kit9sc88.png" alt=""/>
              </div>
              <div className="item-content">
                <h2>Coronavirus Disease (COVID-19) Dashboard </h2>
                <div className="stack">
                  <button>React</button>
                  <button>SCSS</button>
                  <button>Charts</button>
                  <button>Style-componenet</button>
                  <button>Leaflet</button>
                  <button>AXIOS</button>
                  <button>Firebase</button>
                  <button>Express</button>
                  <button>Node</button>
                  <button>NPM</button>
                </div>
                <h3>A group project in Web Application Development class, This site aims to provide a simple tool to track global progress in defeating Covid-19</h3>
                <div className="item-social">
                  <div className="item-social-wrapper">
                    <div className="item-social-list">
                      <a
                        href="https://github.com/covid19-deepverse/covid19-deepverse.io"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiIcons.AiFillGithub size="1.4em" />
                      </a>
                    </div>
                    <div className="item-social-list">
                      <a
                        href="http://174.138.22.85:3000/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <VscIcons.VscLinkExternal size="1.1em" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </Fade>

            <Fade right cascade>
            <div className="feature-project-details-item">
              <div className="item-show">
                <img src="https://i.ibb.co/KWXXtwz/Screen-Shot-2563-12-18-at-03-28-48-removebg-preview.png" alt=""/>
              </div>
              <div className="item-content">
                <h2>SE TO-DO</h2>
                <div className="stack">
                  <button>React Native</button>
                  <button>SQLite</button>
                  <button>Firebase</button>
                  <button>Moment</button>
                  <button>Material-Ui</button>
                  <button>Node</button>
                  <button>NPM</button>
                </div>
                <h3>SE To-Do is an easy-to-use time and task management application that helps you to manage tasks anywhere and anytime, and helps you to perform tasks efficiently.</h3>

                <div className="item-social">
                  <div className="item-social-wrapper">

                    <div className="item-social-list">
                      <a
                        href="https://github.com/Khawoat6/todolist-application"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiIcons.AiFillGithub size="1.4em" />
                      </a>
                    </div>
                    <div className="item-social-list">
                      <a
                        href="https://github.com/expo/react-native/archive/sdk-36.0.0.tar.gz"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiIcons.AiFillAndroid size="1.4em" />
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            </div>
            </Fade>

            <Fade right cascade>
            <div className="feature-project-details-item">
              <div className="item-show">
                <img src="https://i.ibb.co/H4rYvxs/smartmockups-kitb5rkv.png" alt=""/>
              </div>
              <div className="item-content">
                <h2>SE TO-DO Landing page </h2>
                <div className="stack">
                  <button>HTML</button>
                  <button>CSS</button>
                  <button>JS</button>
                  <button>gh-page</button>
                  <button>Bootstrap</button>
                  <button>Material-Ui</button>
                </div>
                <h3>SE To-Do is an easy-to-use time and task management application that helps you to manage tasks anywhere and anytime, and helps you to perform tasks efficiently.</h3>

                <div className="item-social">
                  <div className="item-social-wrapper">

                    <div className="item-social-list">
                      <a
                        href="https://github.com/Khawoat6/todolist-landingpage.github.io"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiIcons.AiFillGithub size="1.4em" />
                      </a>
                    </div>
                    <div className="item-social-list">
                      <a
                        href="https://khawoat6.github.io/todolist-landingpage.github.io/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <VscIcons.VscLinkExternal size="1.1em" />
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            </div>
            </Fade>

          </div>
        </div>

      </div>
      <div className="other-project">

      </div>
    </section>
    </Fade>
  );
}

export default Project;
