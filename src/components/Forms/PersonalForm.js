import React from "react";
import Form from "./Form";

class PersonalForm extends React.Component {
  render() {
    return (
      <Form>
        <h3 className="form-heading">Personal Information</h3>
        <div className="form-column">
          <input type="text" id="cv-name" placeholder="full name" />
          <input type="text" id="cv-title" placeholder="title" />
          <label for="cv-photo" className="custom-file-input">
            <input type="file" id="cv-photo" accept=".jpg, .jpeg, .png" />
          </label>
          <input type="tel" id="cv-tel" placeholder="phone number" />
          <textarea id="cv-description" placeholder="description" />
        </div>
      </Form>
    );
  }
}

export default PersonalForm;
