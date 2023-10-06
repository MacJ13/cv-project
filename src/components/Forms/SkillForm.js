import Form from "./Form";
import FormButtons from "./FormButtons";
import FormHeading from "./FormHeading";

const SkillForm = (props) => {
  const handleInputChange = (e, id) => {
    const { value } = e.target;
    // const index = +id.split("").pop();

    props.onChangeInputs({ id, value });
  };

  const renderInputs = () => {
    return (
      <div className="form-column">
        {props.skills.map((skill, i) => {
          return (
            <input
              key={skill.id}
              type="text"
              aria-label="Enter work skill"
              id={`skill-${i}`}
              placeholder={`skill ${i + 1}`}
              value={skill.name}
              disabled={!props.checkmark}
              onChange={(e) => {
                handleInputChange(e, skill.id);
              }}
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
          aria-label="select skill form"
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
