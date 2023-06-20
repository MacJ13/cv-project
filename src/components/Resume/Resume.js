import React from "react";

import defaultImg from "../../assets/default.png";

class Resume extends React.Component {
  render() {
    return (
      <div className="resume-draft">
        <div className="resume-column-sm">
          <h2 className="resume-name">Wacław Jezioranski</h2>
          <h3 className="resume-title">Senior Java Developer</h3>
          <img className="resume-photo" src={defaultImg} alt="default avatar" />
          <div className="resume-personal-details">
            <h4 className="resume-h4">Personal data</h4>
            <div className="resume-personal-row">email: example@gmail.com</div>
            <div className="resume-personal-row">tel: +48 123 456 789</div>
          </div>
          <div className="resume-personal-details">
            <h4 className="resume-h4">Skills</h4>
            <div className="resume-personal-row">JavaScript</div>
            <div className="resume-personal-row">Html, Css</div>
            <div className="resume-personal-row">React js</div>
            <div className="resume-personal-row">Testing and programming</div>
          </div>
        </div>
        <div className="resume-column-lg">
          <div className="resume-info">
            <h4 className="h4">Description</h4>
            <div className="resume-desc">
              <em>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                euismod felis eu egestas feugiat. Nullam semper maximus arcu,
                quis vulputate nunc fringilla eget. Integer sagittis tincidunt
                mi, at iaculis metus tempus sit amet.
              </em>
            </div>
          </div>

          <div className="resume-info">
            <h4 className="h4">Experience</h4>
            <div className="resume-timeline">
              <div className="resume-date">2015 - Present</div>
              <div className="resume-content">
                <div className="resume-position">Senior Web Developer</div>
                <div className="resume-company">Facebook Inc., Menlo Park</div>
              </div>
            </div>
            <div className="resume-timeline">
              <div className="resume-date">2012 - 2015</div>
              <div className="resume-content">
                <div className="resume-position">Junior Web Developer</div>
                <div className="resume-company">Tesla Inc., Palo Alto</div>
              </div>
            </div>
            <div className="resume-timeline">
              <div className="resume-date">2010 - 2012</div>
              <div className="resume-content">
                <div className="resume-position">UI / UX Designer</div>
                <div className="resume-company">Google LLC, Mountain View</div>
              </div>
            </div>
          </div>
          <div className="resume-info">
            <h4 className="h4">Education</h4>
            <div className="resume-timeline">
              <div className="resume-date">2008 - 2010</div>
              <div className="resume-content">
                <div className="resume-university">
                  University of Technology, Oklahoma
                </div>
                <div className="resume-degree">Degree: Master</div>
                <div className="resume-subject">Subject: Science</div>
              </div>
            </div>
            <div className="resume-timeline">
              <div className="resume-date">2005 - 2008</div>
              <div className="resume-content">
                <div className="resume-university">
                  University of Design Art, New York
                </div>
                <div className="resume-degree">Degree: Bachelor</div>
                <div className="resume-degree">Subject: Visual Art</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
