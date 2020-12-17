import React, { Component } from 'react';
import logo from '../assets/static/favicon.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import Button from './Button';
//import { CSSTransition } from 'react-transition-group';
import DarkModeToggle from '../components/DarkModeToggle';
import Slide from 'react-reveal/Slide';

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <Slide top cascade>
        <nav className="nav" id="navbar">
          <div className="nav-content">
            <img
              src={logo}
              className="nav-logo"
              alt="Logo"
              onClick={this.scrollToTop}
            />
            <ul className="nav-items">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span>01. </span>
                  <strong>About</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span>02. </span>
                  <strong>Education</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span>03. </span>
                  <strong>Experience</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span>04. </span>
                  <strong>Skills</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span>05. </span>
                  <strong>Project</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span>06. </span>
                  <strong>Contact</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Button />
              </li>
              <li className="nav-item">
                <DarkModeToggle />
              </li>
            </ul>
          </div>
        </nav>
      </Slide>
    );
  }
}
