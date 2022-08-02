import React from 'react';
import '../components/css/Testing.css';
import { RESUME_PHOTO_1, RESUME_PHOTO_2 } from '../components/js/Constants';
import ScrollBar from '../components/js/ScrollBar';
import '../components/css/ScrollBar.css';

function Resume() {
  return (
    <div>
        <div className="container-fluid">
            <div className="testing-tile">
                <div className="row title">
                    <h2><i className="fa-solid fa-school px-3" />EDUCATION</h2>
                </div>
                <div className="row cardbox">
                    <img src={RESUME_PHOTO_1} className="img education-part1 col-lg-4"/>
                    <div className="resume-card education-part1 col-lg-7">
                        <div className="row">
                            <div className="testing-header">
                                <h4>BBA (Finance and Information System)</h4>
                            </div>
                            <div className="row testing-text">
                                <div className="col-md-6">
                                    <h5>HKUST</h5>
                                </div>
                                <div className="col-md-6 text-right">
                                    <h5>Sept 2017 - May 2022</h5>
                                </div>
                            </div>
                            <div className="row testing-text">
                                <div className="col-md-6">
                                    <h5>Award: Dean's List 2018</h5>
                                </div>
                                <div className="col-md-6">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row cardbox">
                    <img src={RESUME_PHOTO_2} className="img education-part2 col-lg-4"/>
                    <div className="resume-card education-part2 col-lg-7">
                        <div className="row">
                            <div className="testing-header">
                                <h4>Academic Exchange Program</h4>
                            </div>
                            <div className="row testing-text">
                                <div className="col-md-6">
                                    <h5>BI Norwegian Business School</h5>
                                </div>
                                <div className="col-md-6  text-right">
                                    <h5>Jan 2020 - Apr 2020</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid" id="professional">
            <div className="testing-tile">
                <div className="row title">
                    <h2><i className="fa-solid fa-briefcase px-3" />Professional Experience</h2>
                </div>
                <div className="resume-card professional-part1">
                    <div className="row">
                        <div className="testing-header">
                            <h4>Technology Consulting Placement</h4>
                        </div>
                        <div className="col-md-6 testing-text">
                            <h5>Advisory, PricewaterhouseCoopers Hong Kong</h5>
                            <li className="to-hide">- Managed a mini project to implement a project management software</li>
                            <li className="to-hide">- Self-learnt Oracle ERP system, mastered 5 out of 10 modules in 8 months</li>
                            <li className="to-hide">- Analyed special user requirements and researched on how the system can accommodate such requirements</li>
                            <li className="to-hide">- Presented numerous times to managers, clients and even partners</li>
                        </div>
                        <div className="col-md-6 testing-text text-right">
                            <h5>Jan 2021 - Aug 2021</h5>
                        </div>
                    </div>
                </div>
                <div className="resume-card professional-part2">
                    <div className="row">
                        <div className="testing-header">
                            <h4>Placement Student Program</h4>
                        </div>
                        <div className="col-md-6 testing-text">
                            <h5>IT Application Support 1 Division, Hong Kong Monetary Authority</h5>
                            <li className="to-hide">- Supported internal users on the trading system CALYPSO, such as debugging and ticketing</li>
                            <li className="to-hide">- Created programs to enhance daily workflow, including cybersecurity procedures</li>
                            <li className="to-hide">- Led other interns in providing technical support to Investment Products Trade Repository System and other core systems</li>
                        </div>
                        <div className="col-md-6 testing-text text-right">
                            <h5>Jun 2020 - Dec 2020</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid" id="skills">
            <div className="row title">
                <h2><i className="fa-solid fa-toolbox px-3" />Skills</h2>
            </div>
            <div className="row cardbox justify-content-around">
                <div className="col resume-skill-card skill-part1 mx-2" >
                    <div className="row">
                        <div className="testing-header title" style={{fontWeight: "400"}}>
                            <h4>Frontend Development</h4>
                        </div>
                        <div className="col-sm">
                            <div className="testing-text" style={{opacity: "100%"}}>
                                <h5><i className="fa-solid fa-certificate px-3 py-3 icon-gold" />HTML</h5>
                                <h5><i className="fa-solid fa-certificate px-3 py-3 icon-gold" />CSS</h5>
                                <h5><i className="fa-solid fa-certificate px-3 py-3 icon-gold" />JS</h5>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="testing-text"  style={{opacity: "100%"}}>
                                <h5><i className="fa-solid fa-certificate px-3 py-3 icon-gold" />React</h5>
                                <h5><i className="fa-solid fa-certificate px-3 py-3 icon-gold" />Bootstrap</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col resume-skill-card skill-part2 mx-2">
                    <div className="row">
                        <div className="testing-header title" style={{fontWeight: "400"}}>
                            <h4>Backend Development</h4>
                        </div>
                        <div className="col-sm">
                            <div className="testing-text" style={{opacity: "100%"}}>
                                <h5><i className="fa-solid fa-certificate px-3 py-3 icon-gold" />Python</h5>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="testing-text" style={{opacity: "100%"}}>
                                <h5><i className="fa-solid fa-certificate px-3 py-3 icon-gold" />SQL</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid" id="other">
            <div className="testing-tile">
                <div className="row title">
                    <h2><i className="fa-solid fa-ellipsis px-3" />Other Experience</h2>
                </div>
                <div className="resume-card other-part1">
                    <div className="row">
                        <div className="testing-header">
                            <h4>ACCA-CFA Institute Business Competition</h4>
                        </div>
                        <div className="col-md-6 testing-text">
                            <h5>Final 12 teams</h5>
                            <li className="to-hide">- Reached top 12 teams among 200 teams from local universities</li>
                            <li className="to-hide">- Created a sustainable and profitable business model as well as incorporating AI and other technology</li>
                            <li className="to-hide">- Invited to work with a startup company that has similar busienss model</li>
                        </div>
                        <div className="col-md-6 testing-text text-right">
                            <h5>Oct 2019 - Jan 2020</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ScrollBar />
    </div>
  )
};

export default Resume;
