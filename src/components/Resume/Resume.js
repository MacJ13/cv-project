import React from "react";

import defaultImg from "../../assets/default.png";

class Resume extends React.Component {
  renderWork() {
    const { works } = this.props;

    return works.map((work) => {
      return (
        <div className="resume-timeline">
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

    return educations.map((education) => {
      return (
        <div className="resume-timeline">
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
              {" "}
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
      <div className="resume-draft">
        <div className="resume-column-sm">
          <h2 className="resume-name">{name}</h2>
          <h3 className="resume-title">{title}</h3>
          <img
            className="resume-photo"
            src={photoSrc || defaultImg}
            alt="default avatar"
          />
          <div className="resume-personal-details">
            <h4 className="h4">Personal data</h4>
            <div className="resume-personal-row">email: {email}</div>
            <div className="resume-personal-row">tel: {tel}</div>
          </div>
          <div className="resume-personal-details">
            <h4 className="h4">Skills</h4>
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
              <em>{description}</em>
            </div>
          </div>

          <div className="resume-info">
            <h4 className="h4">Experience</h4>
            {this.renderWork()}
          </div>
          <div className="resume-info">
            <h4 className="h4">Education</h4>
            {this.renderEducation()}
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
