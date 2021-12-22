import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Archive from '../sections/Archive';
import Fade from 'react-reveal/Slide';
import * as AiIcons from 'react-icons/ai';
import * as VscIcons from 'react-icons/vsc';
import * as DiIcons from 'react-icons/di';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';

function Project({ id }) {
  return (
    <Fade bottom cascade>

      <section className="project" id={id}>
        <div className="feature-project">
          <div className="feature-project-wrapper">
            <div className="feature-project-title">
              <h2>05.</h2>
              <h3>Feature Projects</h3>
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

              <Fade right cascade>
              <div className="feature-project-details-item">
                <div className="item-show">
                  <img src="https://i.ibb.co/ysPD3FC/Macbook-Pro-Light-Background-removebg-preview.png" alt=""/>
                </div>
                <div className="item-content">
                  <h2>Meeting 2019 (แผนผังแสดงการพบกันประจำปี 2562)</h2>
                  <div className="stack">
                    <button>HTML</button>
                    <button>CSS</button>
                    <button>JS</button>
                    <button>gh-page</button>
                    <button>Bootstrap</button>
                    <button>Material-Ui</button>
                  </div>
                  <h3>Developed, recorded data, and designed for counting a number of the meeting with friends. Using React, SCSS, and Github Pages</h3>

                  <div className="item-social">
                    <div className="item-social-wrapper">

                      <div className="item-social-list">
                        <a
                          href="https://github.com/Khawoat6/meeting-2019"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiIcons.AiFillGithub size="1.4em" />
                        </a>
                      </div>
                      <div className="item-social-list">
                        <a
                          href="https://khawoat6.github.io/meeting-2019/"
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

          <div className="other-project-wrapper">

            <div className="other-project-title">
                <h2>06.</h2>
                <h3>Other Projects</h3>
            </div>
            <div className="other-project-details">

              <Fade right cascade>
                <div className="other-project-details-item">
                    <div className="item-content">
                      <h2>School attendance system with line notification based on face recognition</h2>
                      <h3>This project is intended to develop face detection and face recognition. As part of increasing the school attendance rate of Thai students by making a face detection system. Date to indicate the student’s arrival at school and can notify the parent application line and help parents know the behavior of students coming to school and help solve problems of students coming to school as well.</h3>
                      <div className="stack">
                        <button>OpenCV</button>
                        <button>LBPH</button>
                        <button>Python</button>
                        <button>Numpy</button>
                        <button>Pandas</button>
                        <button>pip</button>
                        <button>PyCharm</button>
                        <button>LINE Nofity API</button>
                      </div>
                      <div className="item-social">
                        <div className="item-social-wrapper">
                          <div className="item-social-list">
                            <a
                              href="https://drive.google.com/drive/folders/1-ccNnNQZTfZ1mUW1hxDkUeknkzp3OXmV?usp=sharing"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <DiIcons.DiCodeBadge size="1.7em" />
                            </a>
                          </div>
                          <div className="item-social-list">
                            <a
                              href="https://drive.google.com/file/d/1Kl7Wdx25JErJsy1lighpt2B9e2FyaQ1k/view?usp=sharing"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <RiIcons.RiKeynoteLine size="1.5em" />
                            </a>
                          </div>
                          <div className="item-social-list">
                            <a
                              href="https://www.youtube.com/watch?v=3aoNfOsOAUo"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <AiIcons.AiOutlineYoutube size="1.7em" />
                            </a>
                          </div>

                        </div>
                      </div>

                    </div>
                </div>
              </Fade>

              <Fade right cascade>
                <div className="other-project-details-item">
                    <div className="item-content">
                      <h2>BMI Calculate</h2>
                      {/* <h3>Build Website E-commerce with Laravel 5.5 , Project Final 2017</h3> */}
                      <div className="stack">
                        <button>React Native</button>
                        <button>JS (ES6)</button>
                        <button>CSS3</button>
                        <button>Expo</button>
                      </div>
                      <div className="item-social">
                        <div className="item-social-wrapper">
                          <div className="item-social-list">
                            <a
                              href="https://github.com/Khawoat6/program-return-name-is-top"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <AiIcons.AiFillGithub size="1.4em" />
                            </a>
                          </div>
                        </div>
                      </div>

                    </div>
                </div>
              </Fade>

              <Fade right cascade>
                <div className="other-project-details-item">
                    <div className="item-content">
                      <h2>School attendance system with line notification based on face recognition</h2>
                      <h3>This project is intended to develop face detection and face recognition. As part of increasing the school attendance rate of Thai students by making a face detection system. Date to indicate the student’s arrival at school and can notify the parent application line and help parents know the behavior of students coming to school and help solve problems of students coming to school as well.</h3>
                      <div className="stack">
                        <button>OpenCV</button>
                        <button>Python</button>
                        <button>Numpy</button>
                        <button>Pandas</button>
                        <button>pip</button>
                        <button>PyCharm</button>
                        <button>LINE Nofity API</button>
                      </div>
                      <div className="item-social">
                        <div className="item-social-wrapper">
                          <div className="item-social-list">
                            <a
                              href="https://github.com/covid19-deepverse/covid19-deepverse.io"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <DiIcons.DiGoogleDrive size="1.7em" />
                            </a>
                          </div>
                          <div className="item-social-list">
                            <a
                              href="http://174.138.22.85:3000/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <RiIcons.RiKeynoteLine size="1.4em" />
                            </a>
                          </div>

                        </div>
                      </div>

                    </div>
                </div>
              </Fade>

              <Fade right cascade>
                <div className="other-project-details-item">
                    <div className="item-content">
                      <h2>School attendance system with line notification based on face recognition</h2>
                      <h3>This project is intended to develop face detection and face recognition. As part of increasing the school attendance rate of Thai students by making a face detection system. Date to indicate the student’s arrival at school and can notify the parent application line and help parents know the behavior of students coming to school and help solve problems of students coming to school as well.</h3>
                      <div className="stack">
                        <button>OpenCV</button>
                        <button>Python</button>
                        <button>Numpy</button>
                        <button>Pandas</button>
                        <button>pip</button>
                        <button>PyCharm</button>
                        <button>LINE Nofity API</button>
                      </div>
                      <div className="item-social">
                        <div className="item-social-wrapper">
                          <div className="item-social-list">
                            <a
                              href="https://github.com/covid19-deepverse/covid19-deepverse.io"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <DiIcons.DiGoogleDrive size="1.7em" />
                            </a>
                          </div>
                          <div className="item-social-list">
                            <a
                              href="http://174.138.22.85:3000/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <RiIcons.RiKeynoteLine size="1.4em" />
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
        
      </section>

    </Fade>
  );
}

export default Project;
