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
    const { name, title, email, tel, description } = this.props.person;
    return (
      <Form>
        <h3 className="form-heading">Personal Information</h3>
        <div className="form-column">
          <input
            type="text"
            onChange={this.getName}
            id="cv-name"
            placeholder="full name"
            value={name}
          />
          <input
            type="text"
            onChange={this.getTitle}
            id="cv-title"
            placeholder="title"
            value={title}
          />
          <label htmlFor="cv-photo" className="custom-file-input">
            <input
              type="file"
              onChange={this.getPhotoSrc}
              id="cv-photo"
              accept=".jpg, .jpeg, .png"
            />
          </label>
          <input
            type="email"
            onChange={this.getEmail}
            id="cv-email"
            placeholder="email"
            value={email}
          />
          <input
            type="tel"
            onChange={this.getTel}
            id="cv-tel"
            placeholder="phone number"
            value={tel}
          />
          <textarea
            id="cv-description"
            onChange={this.getDescription}
            placeholder="description"
            value={description}
          />
        </div>
      </Form>
    );
  }
}

export default PersonalForm;
