import React from 'react';
import Slide from 'react-reveal/Slide';

function Side() {
  return (
    <div className="side">
      <div className="side-wrapper">
      <Slide left cascade>
        <div className="mailto">
          <a href="mailto:phattaraphon.c@ku.th">phattaraphon.c@ku.th</a>
        </div>
        </Slide>
        <hr />
      </div>
    </div>
  );
}

export default Side;
