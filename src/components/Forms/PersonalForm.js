import React from "react";
import Form from "./Form";

class PersonalForm extends React.Component {
  getName = (e) => {
    const name = e.target.value;
    const { onChangeName } = this.props;

    onChangeName(name);
  };

  getTitle = (e) => {
    const title = e.target.value;
    const { onChangeTitle } = this.props;

    onChangeTitle(title);
  };

  getEmail = (e) => {
    const email = e.target.value;
    const { onChangeEmail } = this.props;

    onChangeEmail(email);
  };

  getTel = (e) => {
    const tel = e.target.value;
    const { onChangeTel } = this.props;

    onChangeTel(tel);
  };

  getDescription = (e) => {
    const desc = e.target.value;
    const { onChangeDesc } = this.props;
    onChangeDesc(desc);
  };

  getPhotoSrc = (e) => {
    console.log(e.target.files[0]);
    if (!e.target.files || !e.target.files[0]) return;

    const { onChangePhoto } = this.props;
    onChangePhoto(URL.createObjectURL(e.target.files[0]));
  };

  render() {
    return (
      <Form>
        <h3 className="form-heading">Personal Information</h3>
        <div className="form-column">
          <input type="text" id="cv-name" placeholder="full name" />
          <input type="text" id="cv-title" placeholder="title" />
          <label for="cv-image" className="custom-file-input">
            <input type="file" id="cv-image" accept=".jpg, .jpeg, .png" />
          </label>
          <input type="tel" id="cv-tel" placeholder="phone number" />
          <textarea id="cv-desc" placeholder="description" />
        </div>
      </Form>
    );
  }
}

export default PersonalForm;
