import "../styles/style.css";

import React from "react";

import Heading from "./Heading";
import Controls from "./Controls";

import Resume from "./Resume/Resume";

import PersonalForm from "./Forms/PersonalForm";
import ExperienceForm from "./Forms/ExperienceForm";
import EducationForm from "./Forms/EducationForm";

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

  render() {
    return (
      <div className="container">
        <Heading />
        <Controls />

        <div className="cv-form">
          <PersonalForm />
          <ExperienceForm />
          <EducationForm />
        </div>
        <Resume />
      </div>
    );
  }
}

export default App;
