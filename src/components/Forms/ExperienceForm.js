import React from "react";
import Form from "./Form";
import FormButtons from "./FormButtons";

class ExperienceForm extends React.Component {
  handleInputChange = (e) => {
    // console.log("value: ", e.target.value);
    // console.log("column: ");
    const { name, value } = e.target;
    const { index } = e.target.closest(".form-column").dataset;

    // convert index from string to number
    const target = { index: +index, name, value };
    this.props.onChangeInputs(target);
  };

  renderWorkInputs() {
    const { works } = this.props;

    return works.map((work, i) => {
      return (
        <div key={i} data-index={i} className="form-column">
          <input
            type="text"
            onChange={this.handleInputChange}
            id={`work-position-${i}`}
            placeholder="position"
            value={work.position}
            name="position"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            id={`work-company-${i}`}
            placeholder="company"
            value={work.company}
            name="company"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            id={`work-city-${i}`}
            placeholder="city"
            value={work.city}
            name="city"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            id={`work-from-${i}`}
            placeholder="from"
            value={work.from}
            name="from"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            id={`work-to-${i}`}
            placeholder="to"
            value={work.to}
            name="to"
          />
        </div>
      );
    });
  }

  render() {
    return (
      <Form title="Work Experience">
        {this.renderWorkInputs()}
        <FormButtons
          formLength={this.props.works.length}
          onClickAdd={this.props.addWork}
          onClickDelete={this.props.deleteWork}
        />
      </Form>
    );
  }
}

export default ExperienceForm;
