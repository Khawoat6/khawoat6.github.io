import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';

function Social() {
  return (
    <div className="social">
      <div className="social-wrapper">
        <div className="social-list">
          <a
            href="https://www.facebook.com/phattaraphon.oat/"
            target="_blank"
            rel="noreferrer"
          >
            <FiIcons.FiFacebook size="0.8em" />
          </a>
        </div>
        <div className="social-list">
          <a
            href="https://www.instagram.com/khawoat6/"
            target="_blank"
            rel="noreferrer"
          >
            <FaIcons.FaInstagram size="0.8em" />
          </a>
        </div>
        <div className="social-list">
          <a
            href="https://github.com/Khawoat6"
            target="_blank"
            rel="noreferrer"
          >
            <AiIcons.AiFillGithub size="0.8em" />
          </a>
        </div>
        <div className="social-list">
          <a
            href="https://www.linkedin.com/in/phattaraphon/"
            target="_blank"
            rel="noreferrer"
          >
            <FaIcons.FaLinkedin size="0.75em" />
          </a>
        </div>
        <div className="social-list">
          <a
            href="https://twitter.com/phattaraphon_c"
            target="_blank"
            rel="noreferrer"
          >
            <FaIcons.FaTwitter size="0.75em" />
          </a>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Social;
