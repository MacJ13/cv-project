import React from "react";
import Form from "./Form";
import FormButtons from "./FormButtons";

class EducationForm extends React.Component {
  handleInputChange = (e) => {
    const { name, value } = e.target;
    const { index } = e.target.closest(".form-column").dataset;

    // convert index from string to number
    const target = { index: +index, name, value };
    this.props.onChangeInputs(target);
  };

  renderEducationInputs() {
    const { educations } = this.props;

    return educations.map((education, i) => {
      return (
        <div data-index={i} className="form-column">
          <input
            type="text"
            onChange={this.handleInputChange}
            id={`education-university-${i}`}
            placeholder="university"
            value={education.university}
            name="university"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            id={`education-city-${i}`}
            placeholder="city"
            value={education.city}
            name="city"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            id={`education-degree-${i}`}
            placeholder="degree"
            value={education.degree}
            name="degree"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            id={`education-subject-${i}`}
            placeholder="subject"
            value={education.subject}
            name="subject"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            id={`education-from-${i}`}
            placeholder="from"
            value={education.from}
            name="from"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            id={`education-to-${i}`}
            placeholder="to"
            value={education.to}
            name="to"
          />
        </div>
      );
    });
  }

  render() {
    return (
      <Form>
        <h3 className="form-heading">Education Experience</h3>
        {this.renderEducationInputs()}
        <FormButtons
          formLength={this.props.educations.length}
          onClickAdd={this.props.addEducation}
          onClickDelete={this.props.deleteEducation}
        />
      </Form>
    );
  }
}

export default EducationForm;
