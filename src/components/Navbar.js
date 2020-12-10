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
                  01. <strong>About</strong>
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
                  02. <strong>Experience</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  03. <strong>Work</strong>
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
                  04. <strong>Contact</strong>
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
