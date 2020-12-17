import React from 'react';
import Fade from 'react-reveal/Slide';

function Contact({id}) {
  return (
    <Fade bottom cascade>
      <div className="contact" id={id}>
      <Fade bottom cascade>
        <div className="contact-wrapper">
          <div className="numbered-heading">
            <h2>06.</h2>
            <h3>What's Next?</h3>
          </div>
          <h2 className="title">Get In Touch</h2>
          <p>
            Although I'm not currently looking for any new opportunities, my inbox
            is always open. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
          <div className="button-say-hello">
              <a href="mailto:phattaraphon.c@ku.th">Say Hello</a>
          </div>
        </div>
        </Fade>
      </div>
    </Fade>
  );
}

export default Contact;
