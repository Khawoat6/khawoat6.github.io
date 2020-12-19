import React from 'react';
import Fade from 'react-reveal/Slide';

function Skills({ id }) {
  return (
    <Fade bottom cascade>
      <section className="skills" id={id}>
        <div className="skills-title">
          <h2>04.</h2>
          <h3>Skills</h3>
        </div>
        <Fade bottom cascade>
        <div className="skills-more">
          <div className="skills-category-label">
            <div className="skills-category-title">LANGUAGES</div>
            <li className="skills-category-item">HTML5</li>
            <li className="skills-category-item">CSS3</li>
            <li className="skills-category-item">JavaScript (ES6)</li>
            <li className="skills-category-item">SASS/SCSS</li>
            <li className="skills-category-item">MySQL</li>
            <li className="skills-category-item">Python</li>
            <li className="skills-category-item">Java</li>
            <li className="skills-category-item">C++</li>
            <li className="skills-category-item">Bash</li>
          </div>
          <div className="skills-category-label">
          <div className="skills-category-title">FRAMEWORKS</div>
            <li className="skills-category-item">React</li>
            <li className="skills-category-item">React Native</li>
            <li className="skills-category-item">Gatsby</li>
            <li className="skills-category-item">Charts</li>
            <li className="skills-category-item">Leaflet</li>
            <li className="skills-category-item">D3</li>
            <li className="skills-category-item">ReCharts</li>
            <li className="skills-category-item">Material-UI</li>
            <li className="skills-category-item">Styled-components</li>
            <li className="skills-category-item">Animate.css</li>
            <li className="skills-category-item">Bootstrap</li>
            <li className="skills-category-item">Bulma</li>
            <li className="skills-category-item">Emmet</li>
            <li className="skills-category-item">NPM</li>
            <li className="skills-category-item">Wordpress</li>
          </div>
          <div className="skills-category-label">
          <div className="skills-category-title">TOOLS</div>
            <li className="skills-category-item">Git & GitHub</li>
            <li className="skills-category-item">SourceTree</li>
            <li className="skills-category-item">Trello</li>
            <li className="skills-category-item">Evernote</li>
            <li className="skills-category-item">Slack</li>
            <li className="skills-category-item">Keynote</li>
            <li className="skills-category-item">Notion</li>
            <li className="skills-category-item">VSCode</li>
            <li className="skills-category-item">Postman</li>
            <li className="skills-category-item">Google Sheets</li>
            <li className="skills-category-item">Chrome DevTools</li>
            <li className="skills-category-item">Zoom</li>
          </div>
          <div className="skills-category-label">
            <div className="skills-category-title">DESIGN</div>
            <li className="skills-category-item">Sketch</li>
            <li className="skills-category-item">Adobe XD</li>
            <li className="skills-category-item">Canva</li>
            <li className="skills-category-item">Figma</li>
            <li className="skills-category-item">InVision</li>
            <li className="skills-category-item">Prototyping</li>
            <li className="skills-category-item">Wireframing</li>
          </div>
          <div className="skills-category-label">
            <div className="skills-category-title">SOFT SKILLS</div>
            <li className="skills-category-item">Entrepreneur</li>
            <li className="skills-category-item">Collaboration</li>
            <li className="skills-category-item">Time Management</li>
            <li className="skills-category-item">Self-Development</li>
            <li className="skills-category-item">Critical Thinking</li>
            <li className="skills-category-item">Leadership</li>
            <li className="skills-category-item">Adaptability</li>
            <li className="skills-category-item">Creativity</li>
            <li className="skills-category-item">Growth Mindset</li>
            <li className="skills-category-item">Humility</li>
            <li className="skills-category-item">Self Directed Learning</li>
            <li className="skills-category-item">Multipotentialite</li>
          </div>
        </div>
        </Fade>
      </section>
    </Fade>
  );
}

export default Skills;
