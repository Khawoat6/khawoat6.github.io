import React from 'react'
import Fade from 'react-reveal/Slide';

function Education() {
    return (
        <Fade bottom cascade>
            <section className="education">
                <div className="education-wrapper">
                    <div className="education-title">
                        <h2>02.</h2>
                        <h3>Education</h3>
                    </div>
                    <Fade right cascade>
                    <div className="education-detail">

                        <div className="education-detail-item">
                            <div className="education-detail-left">
                                <h1>Kasetsart University</h1>
                                <span>Bachelor of Engineering (B.Eng.), Computer Engineering</span>
                                <li>Attended in Shopee Code League 2020 (Student Category) - Team Deepverse.io</li>
                                <li>Attended in Startup Thailand Hackathon 2018 - Team Pocket Doctor</li>
                                <li>Attended in KU Startup Bootcamp #1 in 2017 and #2 in 2018 - Team WERSE'</li>
                                <li>Volunteered on developer in KU SRC Startup Hackathon 2017 </li>
                                <li>1st runner-up and Great Idea Startup Hackathon 2017 - Team AstroExpert</li>
                                <li>Participated in Startup Thailand League 2017 - Team PrintSpin and Disher</li>
                            </div>
                            <div className="education-detail-right">
                                <h3>Jul. 2016 - 2020</h3>
                                <h3>Chonburi, THA</h3>
                                <h3>GPAX 2.53</h3>
                            </div>
                        </div>
                        <div className="education-detail-item">
                            <div className="education-detail-left">
                                <h1>Srinakharinwirot University</h1>
                                <span>Bachelor of Science Program in Physics,  (2 term)</span>
                                <li>Physics member of the Cheerleader team</li>
                                <li>1st runner-up Volleyball  "SWU GAME 2016"</li>
                            </div>
                            <div className="education-detail-right">
                                <h3>Aug. 2015 - 2016</h3>
                                <h3>Bangkok, THA</h3>
                            </div>
                        </div>
                        <div className="education-detail-item">
                            <div className="education-detail-left">
                                <h1>Kaennakhon Witthayalai School</h1>
                                <span>High School in Mathematics-Science Program</span>
                                <li>Attended in "Youth Engineer to AEC 2014" at Suranaree University of Technology</li>
                                <li>Attended in "EN-CAMP #12" at Khonkaen University</li>
                                <li>1st runner-up Beach Volleyball - The National Student Sport 2014</li>
                            </div>
                            <div className="education-detail-right">
                                <h3>May.  2012 - 2014</h3>
                                <h3>Khonkaen, THA</h3>
                                <h3>GPAX 2.87</h3>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
            </section>  
        </Fade>
    )
}

export default Education
