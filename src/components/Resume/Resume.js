import React from "react";

import defaultImg from "../../assets/avatar1.jpg";
import ResumeDetails from "./ResumeDetails";

const Resume = (props) => {
  const { name, title, photoSrc, email, tel, description } = props.person;

  const renderSkills = () => {
    const { skills } = props;

    return skills.map((skill, i) => {
      return (
        <div key={i} className="resume-personal-row">
          {skill}
        </div>
      );
    });
  };

  const renderWork = () => {
    const { works } = props;

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
  };

  const renderEducation = () => {
    const { educations } = props;

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
  };

  return (
    <div className="resume">
      <div ref={props.innerRef} className="resume-draft">
        <div className="resume-column-sm">
          <h2 className="resume-name">{name}</h2>
          <h3 className="resume-title">{title}</h3>
          <div className="resume-avatar">
            <img
              className="resume-photo"
              src={photoSrc || defaultImg}
              alt="default avatar"
            />
          </div>

          <ResumeDetails cls="resume-personal-details" title="Personal Data">
            <div className="resume-personal-row">
              <strong>E-mail</strong>
              <br /> {email}
            </div>
            <div className="resume-personal-row">
              <strong>Phone number</strong>
              <br />
              {tel}
            </div>
          </ResumeDetails>
          {props.checkmark && (
            <ResumeDetails cls="resume-personal-details" title="Skills">
              {renderSkills()}
            </ResumeDetails>
          )}
        </div>

        <div className="resume-column-lg">
          <ResumeDetails cls="resume-info" title="Description">
            <em>{description}</em>
          </ResumeDetails>
          <ResumeDetails cls="resume-info" title="Experience">
            {renderWork()}
          </ResumeDetails>
          <ResumeDetails cls="resume-info" title="Education">
            {renderEducation()}
          </ResumeDetails>
        </div>
      </div>
    </div>
  );
};

export default Resume;
