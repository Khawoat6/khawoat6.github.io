import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as VscIcons from "react-icons/vsc";

function Footer() {
    return (
        <div className="footer">
           <div className="footer-wrapper">
              <a href="https://github.com/Khawoat6/khawoat6.github.io" target="_blank"  rel="noopener noreferrer">
                <div >Designed by Brittany Chiang & Built by Oat Phattaraphon</div>
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
