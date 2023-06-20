import "../styles/style.css";

import React from "react";

import Heading from "./Heading";
import Controls from "./Controls";

import Resume from "./Resume/Resume";

import PersonalForm from "./Forms/PersonalForm";
import ExperienceForm from "./Forms/ExperienceForm";
import EducationForm from "./Forms/EducationForm";

import { examplePersonalData } from "../config";

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
    };
  }

  onChangePersonalInputs = (target) => {
    const { name, value } = target;
    this.setState({ personal: { ...this.state.personal, [name]: value } });
<<<<<<< HEAD
=======
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
    });
  };

  onClickLoadBtn = () => {
    this.setState({
      personal: { ...examplePersonalData },
    });
>>>>>>> 03942ea (Modify App Component)
  };

  render() {
    const { personal } = this.state;

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
          <ExperienceForm />
          <EducationForm />
        </div>
        <Resume person={personal} />
      </div>
    );
  }
}

export default App;
