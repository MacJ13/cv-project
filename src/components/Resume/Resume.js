import React from "react";

import defaultImg from "../../assets/default.png";
import ResumeDetails from "./ResumeDetails";

class Resume extends React.PureComponent {
  renderWork() {
    const { works } = this.props;

    return works.map((work, i) => {
      return (
        <div key={i} className="resume-timeline">
          <div className="resume-date">
            {work.from} {work.from ? "-" : ""} {work.to}
          </div>
          <div className="resume-content">
            <div className="resume-position">{work.position}</div>
            <div className="resume-company">
              {work.company}
              {work.city ? "," : ""} {work.city}
            </div>
          </div>
        </div>
      );
    });
  }

  renderEducation() {
    const { educations } = this.props;

    return educations.map((education, i) => {
      return (
        <div key={i} className="resume-timeline">
          <div className="resume-date">
            {education.from} {education.from ? "-" : ""} {education.to}
          </div>
          <div className="resume-content">
            <div className="resume-university">
              {education.university}
              {education.university && education.city ? ", " : ""}
              {education.city}
            </div>
            <div className="resume-degree">
              {!education.degree || `Degree: ${education.degree}`}
            </div>
            <div className="resume-subject">
              {!education.subject || `Subject: ${education.subject}`}
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const { name, title, photoSrc, email, tel, description } =
      this.props.person;

    return (
      <div ref={this.props.innerRef} className="resume-draft">
        <div className="resume-column-sm">
          <h2 className="resume-name">{name}</h2>
          <h3 className="resume-title">{title}</h3>
          <img
            className="resume-photo"
            src={photoSrc || defaultImg}
            alt="default avatar"
          />

          <ResumeDetails cls="resume-personal-details" title="Personal Data">
            <div className="resume-personal-row">email: {email}</div>
            <div className="resume-personal-row">tel: {tel}</div>
          </ResumeDetails>

          <ResumeDetails cls="resume-personal-details" title="Skills">
            <div className="resume-personal-row">JavaScript</div>
            <div className="resume-personal-row">Html, Css</div>
            <div className="resume-personal-row">React js</div>
            <div className="resume-personal-row">Testing and programming</div>
          </ResumeDetails>
        </div>

        <div className="resume-column-lg">
          <ResumeDetails cls="resume-info" title="Description">
            <em>{description}</em>
          </ResumeDetails>
          <ResumeDetails cls="resume-info" title="Experience">
            {this.renderWork()}
          </ResumeDetails>
          <ResumeDetails cls="resume-info" title="Education">
            {this.renderEducation()}
          </ResumeDetails>
        </div>
      </div>
    );
  }
}

export default Resume;
