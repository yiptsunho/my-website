import React from 'react';
import '../App.css';
import Cover from '../Components/js/Cover';
import './OldResume.css';


function OldResume() {
  // <Route exact path="/Contact" element={<Animator className={"education-part1"} animationName={"appear"}/>}/>
  return (
    <>
      <Cover className="resume" pageName="Resume" />
      <div>
        {/* education */}
        <div className="container-fluid">
          <div className="tile">
            <div className="row education-part1">
              <div className="col">
                <div className="resume-header">
                  <p>― EDUCATION</p>
                </div>
              </div>
              <div className="col">
                <div className="resume-header">
                  <p>BBA (Finance and Information System)</p>
                </div>
                <div className="resume-text">
                  <p>HKUST / Sept 2017 - May 2022</p>
                  <p>Awards: Dean's List 2018</p>
                </div>
                <div className="row education-part2">
                  <div className="resume-header">
                    <p>Academic Exchange Program</p>
                  </div>
                  <div className="resume-text">
                    <p>BI Norwegian Business School / Jan 2020 - Apr 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* professional experience */}
        <div className="container-fluid">
          <div className="tile">
            <div className="row professional-part1">
              <div className="col">
                <div className="resume-header">
                  <p>― PROFESSIONAL EXPERIENCE</p>
                </div>
              </div>
              <div className="col">
                <div className="resume-header">
                  <p>Technology Consulting Placement</p>
                </div>
                <div className="resume-text">
                  <p>Advisory, PwC / Hong Kong Jan 2021 - Aug 2021</p>
                  <li>Managed a mini project to implement a project management software</li>
                  <li>Self-learnt Oracle ERP system, mastered 5 out of 10 modules in 8 months</li>
                  <li>Analyed special user requirements and researched on how the system can accommodate such requirements</li>
                  <li>Presented numerous times to managers, clients and even partners</li>
                  <br />
                </div>
                <div className="row professional-part2">
                  <div className="resume-header">
                    <p>Placement Student Program</p>
                  </div>
                  <div className="resume-text">
                    <p>IT Application Support 1 Division, Hong Kong Monetary Authority / Jun 2020 - Dec 2020</p>
                    <li>Supported internal users on the trading system CALYPSO, such as debugging and ticketing</li>
                    <li>Created programs to enhance daily workflow, including cybersecurity procedures</li>
                    <li>Led other interns in providing technical support to Investment Products Trade Repository System and other core systems</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* other experience */}
        <div className="container-fluid">
          <div className="tile">
            <div className="row other-part1">
              <div className="col">
                <div className="resume-header">
                  <p>― OTHER EXPERIENCE</p>
                </div>
              </div>
              <div className="col">
                <div className="resume-header">
                  <p>ACCA-CFA Institute Business Competition</p>
                </div>
                <div className="resume-text">
                  <p>Final 12 teams / Oct 2019 - Jan 2020</p>
                  <li>Reached top 12 teams among 200 teams from local universities</li>
                  <li>Created a sustainable and profitable business model as well as incorporating AI and other technology</li>
                  <li>Invited to work with a startup company that has similar busienss model</li>
                </div>
                <div className="row other-part2">
                  <div className="resume-header">
                    <p></p>
                  </div>
                </div>
                <div className="resume-text">
                    
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills/qualifications and Language */}
        <div className="container-fluid  block">
          <div className="tile">
            <div className="row skillandlanguage">
              <div className="col">
                <div className="resume-header">
                  <p>― Skills</p>
                  <p>― Languages</p>
                </div>
              </div>
              <div className="col">
                <div className="resume-text">
                  <p>HTML, CSS, React, Bootstrap, Python, SQL, VBA, Oracle ERP</p>
                  <p>Native in Cantonese, Fluent in English and Mandarin, Beginenr in French</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default OldResume;
