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
          onChange={handleInputChange}
          id="cv-name"
          placeholder="full name"
          value={name}
          name="name"
        />
        <input
          type="text"
          onChange={handleInputChange}
          id="cv-title"
          placeholder="title"
          value={title}
          name="title"
        />
        <label htmlFor="cv-photo" className="custom-file-input">
          <input
            type="file"
            onChange={handleInputChange}
            id="cv-photo"
            accept=".jpg, .jpeg, .png"
            name="photoSrc"
          />
        </label>
        <input
          type="email"
          onChange={handleInputChange}
          id="cv-email"
          placeholder="email"
          value={email}
          name="email"
        />
        <input
          type="tel"
          onChange={handleInputChange}
          id="cv-tel"
          placeholder="phone number"
          value={tel}
          name="tel"
        />
        <textarea
          id="cv-description"
          onChange={handleInputChange}
          placeholder="description"
          value={description}
          name="description"
        />
      </div>
    </Form>
  );
};

// class PersonalForm extends React.Component {
//   handleInputChange = (e) => {
//     const { name, value, type } = e.target;
//     const data = { name, value: type === "file" ? this.getPhotoSrc(e) : value };
//     this.props.onChangeInputs(data);
//   };

//   getPhotoSrc = (e) => {
//     if (!e.target.files || !e.target.files[0])
//       return this.props.person.photoSrc;

//     return URL.createObjectURL(e.target.files[0]);
//   };

//   render() {
//     const { name, title, email, tel, description } = this.props.person;
//     return (
//       <Form title="Personal Information">
//         <div className="form-column">
//           <input
//             type="text"
//             onChange={this.handleInputChange}
//             id="cv-name"
//             placeholder="full name"
//             value={name}
//             name="name"
//           />
//           <input
//             type="text"
//             onChange={this.handleInputChange}
//             id="cv-title"
//             placeholder="title"
//             value={title}
//             name="title"
//           />
//           <label htmlFor="cv-photo" className="custom-file-input">
//             <input
//               type="file"
//               onChange={this.handleInputChange}
//               id="cv-photo"
//               accept=".jpg, .jpeg, .png"
//               name="photoSrc"
//             />
//           </label>
//           <input
//             type="email"
//             onChange={this.handleInputChange}
//             id="cv-email"
//             placeholder="email"
//             value={email}
//             name="email"
//           />
//           <input
//             type="tel"
//             onChange={this.handleInputChange}
//             id="cv-tel"
//             placeholder="phone number"
//             value={tel}
//             name="tel"
//           />
//           <textarea
//             id="cv-description"
//             onChange={this.handleInputChange}
//             placeholder="description"
//             value={description}
//             name="description"
//           />
//         </div>
//       </Form>
//     );
//   }
// }

export default PersonalForm;
