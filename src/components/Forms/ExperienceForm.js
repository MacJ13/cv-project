import React from "react";
import Form from "./Form";

class ExperienceForm extends React.Component {
  renderWorkInputs() {
    const { works } = this.props;

    return works.map((work, i) => {
      console.log(work);
      return (
        <div data-column={i} className="form-column">
          <input
            type="text"
            id={`cv-position-${i}`}
            placeholder="position"
            value={work.position}
          />
          <input
            type="text"
            id={`cv-company-${i}`}
            placeholder="company"
            value={work.company}
          />
          <input
            type="text"
            id={`cv-city-${i}`}
            placeholder="city"
            value={work.city}
          />
          <input
            type="text"
            id={`cv-from-${i}`}
            placeholder="from"
            value={work.from}
          />
          <input
            type="text"
            id={`cv-to-${i}`}
            placeholder="to"
            value={work.to}
          />
        </div>
      );
    });
  }

  render() {
    return (
      <Form>
        <h3 className="form-heading">Work Experience</h3>
        {/* <div className="form-column">
          <input type="text" id="cv-position" placeholder="position" />
          <input type="text" id="cv-company" placeholder="company" />
          <input type="text" id="cv-city" placeholder="city" />
          <input type="text" id="cv-from" placeholder="from" />
          <input type="text" id="cv-to" placeholder="to" />
        </div> */}
        {this.renderWorkInputs()}
        <div className="form-btns">
          <button
            onClick={this.props.addWork}
            type="button"
            className="form-btn"
          >
            Add
          </button>
          <button
            onClick={this.props.deleteWork}
            type="button"
            className="form-btn"
          >
            Delete
          </button>
        </div>
      </Form>
    );
  }
}

export default ExperienceForm;
