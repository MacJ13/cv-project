import "../styles/style.css";

import React from "react";

import Heading from "./Heading";
import Controls from "./Controls";

import Resume from "./Resume/Resume";

import PersonalForm from "./Forms/PersonalForm";
import ExperienceForm from "./Forms/ExperienceForm";
import EducationForm from "./Forms/EducationForm";

import {
  examplePersonalData,
  exampleWorks,
  workData,
  educationData,
  exampleEducation,
} from "../config";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        name: "",
        title: "",
        photoSrc: "",
        email: "",
        tel: "",
        description: "",
      },
      works: [{ ...workData }],
      educations: [{ ...educationData }],
    };
  }

  onChangePersonalInputs = (target) => {
    const { name, value } = target;
    this.setState({ personal: { ...this.state.personal, [name]: value } });
  };

  onChangeWorkInputs = (target) => {
    const { index, name, value } = target;

    // const updatedWork = { ...this.state.works[index] };
    // updatedWork[name] = value;
    const updatedWorks = this.state.works.map((work, i) => {
      if (i === index) {
        return { ...work, [name]: value };
      }

      return work;
    });

    this.setState({ works: updatedWorks });
  };

  onChangeEducationInputs = (target) => {
    const { index, name, value } = target;

    const updatedEducation = this.state.educations.map((education, i) => {
      if (i === index) {
        return { ...education, [name]: value };
      }

      return education;
    });

    this.setState({ educations: updatedEducation });
  };

  onCLickResetBtn = () => {
    this.setState({
      personal: {
        name: "",
        title: "",
        photoSrc: "",
        email: "",
        tel: "",
        description: "",
      },
      works: [{ ...workData }],
      educations: [{ ...educationData }],
    });
  };

  onClickLoadBtn = () => {
    this.setState({
      personal: { ...examplePersonalData },
      works: [...exampleWorks],
      educations: [...exampleEducation],
    });
  };

  onClickAddWorkBtn = () => {
    this.setState({
      works: [...this.state.works, { ...workData }],
    });
  };

  onClickDeleteWorkBtn = () => {
    this.setState({ works: [...this.state.works.slice(0, -1)] });
  };

  onClickAddEducationBtn = () => {
    this.setState({
      educations: [...this.state.educations, { ...educationData }],
    });
  };

  onClickDeleteEducationBtn = () => {
    this.setState({
      educations: [...this.state.works.slice(0, -1)],
    });
  };

  render() {
    const { personal, works, educations } = this.state;

    return (
      <div className="container">
        <Heading />
        <Controls
          onClickReset={this.onCLickResetBtn}
          onClickLoad={this.onClickLoadBtn}
        />

        <div className="cv-form">
          <PersonalForm
            onChangeInputs={this.onChangePersonalInputs}
            person={personal}
          />
          <ExperienceForm
            onChangeInputs={this.onChangeWorkInputs}
            addWork={this.onClickAddWorkBtn}
            deleteWork={this.onClickDeleteWorkBtn}
            works={works}
          />
          <EducationForm
            onChangeInputs={this.onChangeEducationInputs}
            educations={educations}
            addEducation={this.onClickAddEducationBtn}
            deleteEducation={this.onClickDeleteEducationBtn}
          />
        </div>
        <Resume person={personal} works={works} educations={educations} />
      </div>
    );
  }
}

export default App;
