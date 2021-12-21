import React from 'react'
import Fade from 'react-reveal/Slide';

function Experience({id}) {
    return (
        <Fade bottom cascade>
            <section className="experience" id={id}>
                <div className="experience-wrapper">
                    <div className="experience-title">
                        <h2>03.</h2>
                        <h3>Experience</h3>
                    </div>
                    <div className="experience-details">
                        <Fade right cascade>
                        <div className="experience-details-wrapper">
                            <div className="experience-item">
                                <div className="experience-item-organization">
                                    <h1>UX/Solution in Productions</h1>
                                    <span>IC WEB Co.,Ltd.</span>
                                    <ul>
                                        <li>K-BIZ</li>
                                        <li>Singha Estate Commercial</li>
                                        <li>SECAP</li>
                                        <li>Catcher</li>
                                        <li>K PLUS Pitching</li>
                                        <li>KBANK API Portal</li>
                                        <li>JDB</li>
                                        <li>EXIM Bank</li>
                                        <li>Jaadhai Motor Insurance</li>
                                        <li>Jaadhai ravel Insurance</li>
                                        <li>MoU Collaboration : Searching for the Memoranda of Understanding between Chulalongkorn University and its partner universities.</li>
                                    </ul>
                                </div>
                                <div className="experience-item-date">
                                    <h3>Mar - Aug 2021</h3>
                                    <h3>Bangkok, THA</h3>
                                </div>
                            </div>


                            <div className="experience-item">
                                <div className="experience-item-organization">
                                    <h1>Frontend Developer Internship</h1>
                                    <span>Boonmee Lab Co.,Ltd.</span>
                                    <ul>
                                        <li>Punch Up x Thairath : ปลาทูไทยกำลังจะหายไปจากโลก</li>
                                        <li>MoU Collaboration : Searching for the Memoranda of Understanding between Chulalongkorn University and its partner universities.</li>
                                    </ul>
                                </div>
                                <div className="experience-item-date">
                                    <h3>May - July 2019</h3>
                                    <h3>Bangkok, THA</h3>
                                </div>
                            </div>
                            
                            <div className="experience-item">
                                <div className="experience-item-organization">
                                    <h1>Content Writer at YPP</h1>
                                    <span>Young Passionate Program (YPP) by YEAH x Lean Startup TH</span>
                                    <ul>
                                        <li>Volunteered on content writer in Young  Lean Entrepreneur, Young Digital Marketeer and Young Innovation Creator</li>
                                    </ul>
                                </div>
                                <div className="experience-item-date">
                                    <h3>Jan. - Dec. 2018</h3>
                                    <h3>Bangkok, THA</h3>
                                </div>
                            </div>
                            <div className="experience-item">
                                <div className="experience-item-organization">
                                    <h1>Graphic Design at EXP Program</h1>
                                    <span>EXP Program by YEAH x Sharing Citizen x Growth cafe & co.</span>
                                    <ul>
                                        <li>Attended on graphic design in EXP Program is a course event management and digital marketing</li>
                                    </ul>
                                </div>
                                <div className="experience-item-date">
                                    <h3>Jul. - Ang. 2017</h3>
                                    <h3>Bangkok, THA</h3>
                                </div>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </Fade>
    )
}

export default Experience;