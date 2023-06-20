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

  onChangeInputPhoto = (photoSrc) => {
    this.setState({ personal: { ...this.state.personal, photoSrc } });
  };

  onChangeInputName = (name) => {
    this.setState({ personal: { ...this.state.personal, name } });
  };

  onChangeInputTitle = (title) => {
    this.setState({ personal: { ...this.state.personal, title } });
  };

  onChangeInputEmail = (email) => {
    this.setState({ personal: { ...this.state.personal, email } });
  };

  onChangeInputTel = (tel) => {
    this.setState({ personal: { ...this.state.personal, tel } });
  };

  onChangeTextDescription = (description) => {
    this.setState({ personal: { ...this.state.personal, description } });
  };

  render() {
    const { personal } = this.state;

    return (
      <div className="container">
        <Heading />
        <Controls />

        <div className="cv-form">
          <PersonalForm
            onChangePhoto={this.onChangeInputPhoto}
            onChangeName={this.onChangeInputName}
            onChangeTitle={this.onChangeInputTitle}
            onChangeEmail={this.onChangeInputEmail}
            onChangeTel={this.onChangeInputTel}
            onChangeDesc={this.onChangeTextDescription}
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
