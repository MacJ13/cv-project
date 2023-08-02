import React from "react";
import Form from "./Form";
import FormButtons from "./FormButtons";

import { memo } from "react";
import FormHeading from "./FormHeading";

const EducationForm = (props) => {
  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    // const { index } = e.target.closest(".form-column").dataset;

    // convert index from string to number
    const target = { id, name, value };
    props.onChangeInputs(target);
  };

  const renderEducationInputs = () => {
    const { educations } = props;

    return educations.map((education, i) => {
      return (
        <div key={education.id} data-index={i} className="form-column">
          <input
            type="text"
            onChange={(e) => {
              handleInputChange(e, education.id);
            }}
            id={`education-university-${i}`}
            placeholder="university"
            value={education.university}
            name="university"
          />
          <input
            type="text"
            onChange={(e) => {
              handleInputChange(e, education.id);
            }}
            id={`education-city-${i}`}
            placeholder="city"
            value={education.city}
            name="city"
          />
          <input
            type="text"
            onChange={(e) => {
              handleInputChange(e, education.id);
            }}
            id={`education-degree-${i}`}
            placeholder="degree"
            value={education.degree}
            name="degree"
          />
          <input
            type="text"
            onChange={(e) => {
              handleInputChange(e, education.id);
            }}
            id={`education-subject-${i}`}
            placeholder="subject"
            value={education.subject}
            name="subject"
          />
          <input
            type="text"
            onChange={(e) => {
              handleInputChange(e, education.id);
            }}
            id={`education-from-${i}`}
            placeholder="from"
            value={education.from}
            name="from"
          />
          <input
            type="text"
            onChange={(e) => {
              handleInputChange(e, education.id);
            }}
            id={`education-to-${i}`}
            placeholder="to"
            value={education.to}
            name="to"
          />
        </div>
      );
    });
  };

  return (
    <Form>
      <FormHeading title="Education Experience" />
      {renderEducationInputs()}
      <FormButtons
        formLength={props.educations.length}
        onClickAdd={props.addEducation}
        onClickDelete={props.deleteEducation}
      />
    </Form>
  );
};

export default memo(EducationForm);
