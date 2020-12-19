import React from 'react';
import Fade from 'react-reveal/Slide';

function About({ id }) {
  return (
    <Fade bottom>
      <div className="about" id={id}>
        <div className="about-wrapper">
          <div className="about-title">
            <h2>01.</h2>
            <h3>About Me</h3>
          </div>
          <Fade bottom cascade>
          <div className="inner">
            <div className="inner-left">
              <div className="inner-left-top">
                <p>
                  Hello! I'm Phattaraphon, a software engineer based in Bangkok,
                  THA.
                </p>
                <p>
                  I enjoy creating things that live on the internet, whether
                  that be websites, applications, or anything in between. My
                  goal is to always build products that provide pixel-perfect,
                  performant experiences.
                </p>
                <p>
                  Shortly after graduating from{' '}
                  <a
                    href="https://www.ku.ac.th/th"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kasetsart University
                  </a>
                  , I joined the engineering team at{' '}
                  <a
                    href="https://www.boonmeelab.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Boonmee Lab
                  </a>{' '}
                  where I work on a wide variety of interesting and meaningful
                  projects on a daily basis.
                </p>
                <p>
                  Here are a few technologies I've been working with recently:
                </p>
              </div>
              <Fade bottom cascade>
              <div className="inner-left-bottom">
                <li className="inner-left-bottom-skill">JavaScript (ES6)</li>
                <li className="inner-left-bottom-skill">HTML5 + CSS3 (SCSS)</li>
                <li className="inner-left-bottom-skill">
                  React & React Native
                </li>
                <li className="inner-left-bottom-skill">Vue</li>
                <li className="inner-left-bottom-skill">Python</li>
                <li className="inner-left-bottom-skill">Wordpress</li>
              </div>
              </Fade>
            </div>
            <div className="inner-right">
              <img
                src="https://i.ibb.co/yqW1GhS/circle-cropped.png"
                alt="new"
              />
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
}

export default About;
