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
                                        <li>KBank | K-BIZ Microsite : Designed a new user interface to explain the function and tutorials of K-BIZ; It’s can reduce a customer calling to a call center</li>
                                        <li>EXIM Bank of Thailand : Collaborated across various teams to improve design systems, visual designs, and recommend ideating new concept with UI Designer</li>
                                        <li>KBank | K PLUS Microsite (Pitching) : Redesigned website and collaborated with Project Manager, Customer Service and UI Designer teams to created wireframes, prototyped on mobile device and hierarchical site structure K PLUS website</li>
                                        <li>Jaadhai Insurance (MSIG) : Worked iteratively to design, define, and validate solutions for Jaadhai Insurance website</li>
                                        <li>Joint Development Bank (JDB Bank) : Worked with MD, Customer Services, UI Designer teams. to created wireframes, user flows, and interaction prototyped for Bank Account Registration Form</li>
                                        <li>KSingha Estate Commercial Microsite : Collaborated with Project Manager, Customer Services and UI Designer teams to create wireframes, prototypes, personas, and user stories based on interviews and google analytics</li>
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
                                        <li>Punch Up x ThairatTV (ปลาทูไทยกำลังจะหายไปจากโลก) : Developed data journalism website using React, Next, and Emotion. The project was got honorable mention award  from Digital News Excellence Awards 2019</li>
                                        <li>MoU Collaboration : Worked with a team BML (Internship 2019) to build a website type of Data Visualization for the client about searching for the memoranda of understanding between Chulalongkorn University and its partner of universities</li>
                                    </ul>
                                </div>
                                <div className="experience-item-date">
                                    <h3>May - July 2019</h3>
                                    <h3>Bangkok, THA</h3>
                                </div>
                            </div>
                            
                            <div className="experience-item">
                                <div className="experience-item-organization">
                                    <h1>Content Writer (Volunteered)</h1>
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
                                    <h1>Graphic Designer (Volunteered)</h1>
                                    <span>EXP Program by YEAH x Sharing Citizen x Growth Cafe & Co.</span>
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