import React from "react";
import Form from "./Form";

class EducationForm extends React.Component {
  render() {
    return (
      <Form>
        <h3 className="form-heading">Education Experience</h3>
        <div className="form-column">
          <input type="text" id="cv-university" placeholder="university" />
          {/* <input type="text" id="cv-city" placeholder="city" /> */}
          <input type="text" id="cv-degree" placeholder="degree" />
          <input type="text" id="cv-subject" placeholder="subject" />
          <input type="text" id="cv-from" placeholder="from" />
          <input type="text" id="cv-to" placeholder="to" />
        </div>
        <div className="form-btns">
          <button type="button" className="form-btn">
            Add
          </button>
          <button type="button" className="form-btn">
            Delete
          </button>
        </div>
      </Form>
    );
  }
}

export default EducationForm;
