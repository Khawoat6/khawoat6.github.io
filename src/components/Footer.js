import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as VscIcons from "react-icons/vsc";

function Footer() {
    return (
        <div className="footer">
           <div className="footer-wrapper">
              <a href="https://github.com/Khawoat6/khawoat6.github.io" target="_blank"  rel="noopener noreferrer">
                <h4 >Inspired by Brittany Chiang & Build by Oat Phattaraphon</h4>
                <div className="github-stats">
              <span>
                <AiIcons.AiFillStar />
                <span>1</span>
              </span>
              <span>
                <VscIcons.VscRepoForked />
                <span>2</span>
              </span>
            </div>
              </a>
           </div>
        </div>
    )
}

export default Footer;
