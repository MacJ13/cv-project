import React from "react";
import Form from "./Form";
import FormHeading from "./FormHeading";

const PersonalForm = (props) => {
  const { name, title, email, tel, description } = props.person;

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const data = { name, value: type === "file" ? getPhotoSrc(e) : value };
    props.onChangeInputs(data);
  };

  const getPhotoSrc = (e) => {
    if (!e.target.files || !e.target.files[0]) return props.person.photoSrc;

    return URL.createObjectURL(e.target.files[0]);
  };

  return (
    <Form>
      <FormHeading title="Personal Information" />
      <div className="form-column">
        <input
          type="text"
          aria-label="Enter full name"
          onChange={handleInputChange}
          id="cv-name"
          placeholder="full name"
          value={name}
          name="name"
        />
        <input
          type="text"
          aria-label="Enter work title"
          onChange={handleInputChange}
          id="cv-title"
          placeholder="title"
          value={title}
          name="title"
        />
        <label htmlFor="cv-photo" className="custom-file-input">
          <input
            type="file"
            aria-label="Add change photo"
            onChange={handleInputChange}
            id="cv-photo"
            accept=".jpg, .jpeg, .png"
            name="photoSrc"
          />
        </label>
        <input
          type="email"
          aria-label="Enter email"
          onChange={handleInputChange}
          id="cv-email"
          placeholder="email"
          value={email}
          name="email"
        />
        <input
          type="tel"
          aria-label="Enter phone number"
          onChange={handleInputChange}
          id="cv-tel"
          placeholder="phone number"
          value={tel}
          name="tel"
        />
        <textarea
          id="cv-description"
          aria-label="Enter cv description"
          onChange={handleInputChange}
          placeholder="description"
          value={description}
          name="description"
        />
      </div>
    </Form>
  );
};

export default PersonalForm;
