import React, { forwardRef, useContext } from "react";

import defaultImg from "../../assets/avatar1.jpg";
import ResumeDetails from "./ResumeDetails";
import { SettingsContext } from "../App";

const Resume = forwardRef((props, ref) => {
  const { settings } = useContext(SettingsContext);

  const { color, fontFamily, layout, language } = settings;

  const resumeBg = { backgroundColor: color };

  const resumeFont = { fontFamily };

  const { words } = language;

  const layoutClassName = `resume-draft resume-${layout}`;

  const { name, title, photoSrc, email, tel, description } = props.person;

  const renderSkills = () => {
    const { skills } = props;

    return skills.map((skill) => {
      const cls =
        layout === "top" ? `resume-personal-row skill` : "resume-personal-row";

      return (
        <div key={skill.id} className={cls}>
          {skill.name}
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
              {!education.degree || `${words.degree}: ${education.degree}`}
            </div>
            <div className="resume-subject">
              {!education.subject || `${words.subject}: ${education.subject}`}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="resume">
      <div ref={ref} style={resumeFont} className={layoutClassName}>
        <div style={resumeBg} className="resume-column-sm">
          {layout !== "top" ? (
            <>
              <div className="resume-general">
                <div className="resume-heading">
                  <h2 className="resume-name">{name}</h2>
                  <h3 className="resume-title">{title}</h3>
                </div>

                <div className="resume-avatar">
                  <img
                    className="resume-photo"
                    src={photoSrc || defaultImg}
                    alt="default avatar"
                  />
                </div>
              </div>

              <ResumeDetails
                cls="resume-personal-details"
                title={words.personal}
              >
                <div className="resume-personal-row">
                  <strong>{words.email}</strong>
                  <br /> {email}
                </div>
                <div className="resume-personal-row">
                  <strong>{words.phone}</strong>
                  <br />
                  {tel}
                </div>
              </ResumeDetails>
              {props.checkmark && (
                <ResumeDetails
                  cls="resume-personal-details"
                  title={words.skills}
                >
                  {renderSkills()}
                </ResumeDetails>
              )}
            </>
          ) : (
            <>
              <div className="resume-general">
                <div className="resume-heading">
                  <h2 className="resume-name">{name}</h2>
                  <h3 className="resume-title">{title}</h3>
                  <ResumeDetails cls="resume-personal-details">
                    <div className="resume-personal-row">
                      <strong>{words.email}</strong>
                      <br /> {email}
                    </div>
                    <div className="resume-personal-row">
                      <strong>{words.phone}</strong>
                      <br />
                      {tel}
                    </div>
                  </ResumeDetails>
                  {/* {props.checkmark && (
                  <ResumeDetails cls="resume-personal-details" title="Skills">
                    {renderSkills()}
                  </ResumeDetails>
                )} */}
                </div>
                <div className="resume-avatar">
                  <img
                    className="resume-photo"
                    src={photoSrc || defaultImg}
                    alt="default avatar"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        <div className="resume-column-lg">
          <ResumeDetails cls="resume-info" title={words.description}>
            <em>{description}</em>
          </ResumeDetails>
          <ResumeDetails cls="resume-info" title={words.experience}>
            {renderWork()}
          </ResumeDetails>
          <ResumeDetails cls="resume-info" title={words.education}>
            {renderEducation()}
          </ResumeDetails>
          {layout === "top" && props.checkmark && (
            <ResumeDetails cls="resume-info" title={words.skills}>
              {renderSkills()}
            </ResumeDetails>
          )}
        </div>
      </div>
    </div>
  );
});

// const Resume = (props) => {
//   const { name, title, photoSrc, email, tel, description } = props.person;

//   const direction = "top";

//   const renderSkills = () => {
//     const { skills } = props;

//     return skills.map((skill) => {
//       return (
//         <div key={skill.id} className="resume-personal-row">
//           {skill.name}
//         </div>
//       );
//     });
//   };

//   const renderWork = () => {
//     const { works } = props;

//     return works.map((work, i) => {
//       return (
//         <div key={i} className="resume-timeline">
//           <div className="resume-date">
//             {work.from} {work.from ? "-" : ""} {work.to}
//           </div>
//           <div className="resume-content">
//             <div className="resume-position">{work.position}</div>
//             <div className="resume-company">
//               {work.company}
//               {work.city ? "," : ""} {work.city}
//             </div>
//           </div>
//         </div>
//       );
//     });
//   };

//   const renderEducation = () => {
//     const { educations } = props;

//     return educations.map((education, i) => {
//       return (
//         <div key={i} className="resume-timeline">
//           <div className="resume-date">
//             {education.from} {education.from ? "-" : ""} {education.to}
//           </div>
//           <div className="resume-content">
//             <div className="resume-university">
//               {education.university}
//               {education.university && education.city ? ", " : ""}
//               {education.city}
//             </div>
//             <div className="resume-degree">
//               {!education.degree || `Degree: ${education.degree}`}
//             </div>
//             <div className="resume-subject">
//               {!education.subject || `Subject: ${education.subject}`}
//             </div>
//           </div>
//         </div>
//       );
//     });
//   };

//   return (
//     <div className="resume">
//       <div ref={props.innerRef} className="resume-draft resume-top">
//         {direction !== "top" ? (
//           <div className="resume-column-sm">
//             <div className="resume-general">
//               <div className="resume-heading">
//                 <h2 className="resume-name">{name}</h2>
//                 <h3 className="resume-title">{title}</h3>
//               </div>

//               <div className="resume-avatar">
//                 <img
//                   className="resume-photo"
//                   src={photoSrc || defaultImg}
//                   alt="default avatar"
//                 />
//               </div>
//             </div>

//             <ResumeDetails cls="resume-personal-details" title="Personal Data">
//               <div className="resume-personal-row">
//                 <strong>E-mail</strong>
//                 <br /> {email}
//               </div>
//               <div className="resume-personal-row">
//                 <strong>Phone number</strong>
//                 <br />
//                 {tel}
//               </div>
//             </ResumeDetails>
//             {props.checkmark && (
//               <ResumeDetails cls="resume-personal-details" title="Skills">
//                 {renderSkills()}
//               </ResumeDetails>
//             )}
//           </div>
//         ) : (
//           <div className="resume-column-sm">
//             <div className="resume-general">
//               <div className="resume-heading">
//                 <h2 className="resume-name">{name}</h2>
//                 <h3 className="resume-title">{title}</h3>
//                 <ResumeDetails cls="resume-personal-details">
//                   <div className="resume-personal-row">
//                     <strong>E-mail</strong>
//                     <br /> {email}
//                   </div>
//                   <div className="resume-personal-row">
//                     <strong>Phone number</strong>
//                     <br />
//                     {tel}
//                   </div>
//                 </ResumeDetails>
//                 {props.checkmark && (
//                   <ResumeDetails cls="resume-personal-details" title="Skills">
//                     {renderSkills()}
//                   </ResumeDetails>
//                 )}
//               </div>
//               <div className="resume-avatar">
//                 <img
//                   className="resume-photo"
//                   src={photoSrc || defaultImg}
//                   alt="default avatar"
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="resume-column-lg">
//           <ResumeDetails cls="resume-info" title="Description">
//             <em>{description}</em>
//           </ResumeDetails>
//           <ResumeDetails cls="resume-info" title="Experience">
//             {renderWork()}
//           </ResumeDetails>
//           <ResumeDetails cls="resume-info" title="Education">
//             {renderEducation()}
//           </ResumeDetails>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Resume;
