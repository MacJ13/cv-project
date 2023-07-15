import Form from "./Form";
import FormButtons from "./FormButtons";
import FormHeading from "./FormHeading";

const SkillForm = (props) => {
  const handleInputChange = (e) => {
    const { value, id } = e.target;
    const index = +id.split("").pop();

    props.onChangeInputs({ index, value });
  };

  console.log("render skill form");

  const renderInputs = () => {
    return (
      <div className="form-column">
        {props.skills.map((skill, i) => {
          return (
            <input
              type="text"
              id={`skill-${i}`}
              placeholder={`skill ${i + 1}`}
              value={skill}
              disabled={!props.checkmark}
              onChange={handleInputChange}
            />
          );
        })}
      </div>
    );
  };

  return (
    <Form title="Skills (Optional)">
      <div className="form-heading-skills">
        <input
          type="checkbox"
          className="form-checkbox"
          id="checkbox-skills"
          name="checkbox-skills"
          checked={props.checkmark}
          onChange={props.onChangeCheckmark}
        />
        <FormHeading title="Skills (Optional)" />
      </div>
      {renderInputs()}
      <FormButtons
        checkmark={props.checkmark}
        formLength={props.skills.length}
        onClickAdd={props.addSkill}
        onClickDelete={props.deleteSkill}
      />
    </Form>
  );
};

export default SkillForm;
