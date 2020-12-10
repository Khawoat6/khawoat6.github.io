import React from 'react';

function Skills({ id }) {
  return (
    <div className="skills" id={id}>
      <div className="skills-title">Skills</div>
      <div className="skills-more">
        <div className="skills-category-label">
          <div className="skills-category-title">LANGUAGES</div>
          <li className="skills-category-item">JavaScript (ES6)</li>
          <li className="skills-category-item">TypeScript</li>
          <li className="skills-category-item">HTML</li>
          <li className="skills-category-item">CSS/SASS</li>
          <li className="skills-category-item">Python</li>
          <li className="skills-category-item">SQL</li>
          <li className="skills-category-item">R</li>
        </div>
        <div className="skills-category-label">
        <div className="skills-category-title">FRAMEWORKS</div>
          <li className="skills-category-item">Ember & Glimmer</li>
          <li className="skills-category-item">React</li>
          <li className="skills-category-item">Jekyll</li>
          <li className="skills-category-item">Node</li>
          <li className="skills-category-item">D3</li>
          <li className="skills-category-item">Wordpress</li>
          <li className="skills-category-item">Timber</li>
        </div>
        <div className="skills-category-label">
        <div className="skills-category-title">TOOLS</div>
          <li className="skills-category-item">Bash</li>
          <li className="skills-category-item">Git & GitHub</li>
          <li className="skills-category-item">Gulp & Grunt</li>
          <li className="skills-category-item">Chrome DevTools</li>
          <li className="skills-category-item">Postman</li>
          <li className="skills-category-item">MongoDB</li>
          <li className="skills-category-item">SourceTree</li>
        </div>
        <div className="skills-category-label">
        <div className="skills-category-title">DESIGN</div>
          <li className="skills-category-item">Sketch</li>
          <li className="skills-category-item">InDesign</li>
          <li className="skills-category-item">InVision</li>
          <li className="skills-category-item">Prototyping</li>
          <li className="skills-category-item">Wireframing</li>
          <li className="skills-category-item">User Testing</li>
          <li className="skills-category-item">Figma</li>
        </div>
      </div>
    </div>
  );
}

export default Skills;
