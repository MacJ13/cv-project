import Controls from "./Controls/Controls";

import Resume from "./Resume/Resume";

import PersonalForm from "./Forms/PersonalForm";
import ExperienceForm from "./Forms/ExperienceForm";
import EducationForm from "./Forms/EducationForm";
import SkillForm from "./Forms/SkillForm";

import {
  examplePersonalData,
  exampleWorks,
  workData,
  educationData,
  exampleEducation,
  exampleSkills,
  skillsData,
} from "../data/data";

import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Main() {
  const resumeEl = useRef(null);

  const [personal, setPersonal] = useState({
    name: "",
    title: "",
    photoSrc: "",
    email: "",
    tel: "",
    description: "",
  });

  const [works, setWorks] = useState([workData]);
  const [educations, setEducations] = useState([educationData]);

  const [skills, setSkills] = useState([skillsData]);

  const [checkmark, setCheckmark] = useState(true);

  const onChangeCheckmark = () => {
    setCheckmark(!checkmark);
  };

  const onChangePersonalInputs = (target) => {
    const { name, value } = target;
    setPersonal({ ...personal, [name]: value });
  };

  const onChangeSkillInputs = (target) => {
    const { id, value } = target;
    const updatedSkills = skills.map((skill, i) => {
      if (skill.id === id) {
        return { ...skill, name: value };
      }
      return skill;
    });

    setSkills([...updatedSkills]);
  };

  const onChangeWorkInputs = (target) => {
    const { id, name, value } = target;
    console.log(target);

    const updatedWorks = works.map((work) => {
      if (work.id === id) {
        return { ...work, [name]: value };
      }

      return work;
    });

    setWorks([...updatedWorks]);
  };

  const onChangeEducationInputs = (target) => {
    const { id, name, value } = target;

    const updatedEducations = educations.map((education) => {
      if (education.id === id) {
        return { ...education, [name]: value };
      }

      return education;
    });

    setEducations([...updatedEducations]);
  };

  const onClickResetBtn = () => {
    setPersonal(() => ({
      name: "",
      title: "",
      photoSrc: "",
      email: "",
      tel: "",
      description: "",
    }));
    setWorks(() => [workData]);
    setEducations(() => [educationData]);
    if (!checkmark) return;
    setSkills([skillsData]);
  };

  const onClickLoadBtn = () => {
    setCheckmark(true);
    setPersonal(examplePersonalData);
    setWorks([...exampleWorks]);
    setEducations([...exampleEducation]);
    setSkills([...exampleSkills]);
  };

  const onClickAddSkillBtn = () => {
    if (!checkmark) return;
    setSkills([...skills, { id: uuidv4(), name: "" }]);
  };

  const onClickDeleteSkillBtn = () => {
    if (!checkmark) return;
    setSkills([...skills.slice(0, -1)]);
  };

  const onClickAddWorkBtn = () => {
    setWorks([...works, { id: uuidv4(), ...workData }]);
  };

  const onClickDeleteWorkBtn = () => {
    setWorks([...works.slice(0, -1)]);
  };

  const onClickAddEducationBtn = () => {
    setEducations([...educations, { id: uuidv4(), ...educationData }]);
  };

  const onClickDeleteEducationBtn = () => {
    setEducations([...educations.slice(0, -1)]);
  };

  return (
    <div className="container">
      <Controls
        resumeTag={resumeEl}
        onClickReset={onClickResetBtn}
        onClickLoad={onClickLoadBtn}
      />

      <div className="cv-form">
        <PersonalForm
          onChangeInputs={onChangePersonalInputs}
          person={personal}
        />
        <SkillForm
          skills={skills}
          checkmark={checkmark}
          onChangeCheckmark={onChangeCheckmark}
          onChangeInputs={onChangeSkillInputs}
          addSkill={onClickAddSkillBtn}
          deleteSkill={onClickDeleteSkillBtn}
        />
        <ExperienceForm
          onChangeInputs={onChangeWorkInputs}
          addWork={onClickAddWorkBtn}
          deleteWork={onClickDeleteWorkBtn}
          works={works}
        />
        <EducationForm
          onChangeInputs={onChangeEducationInputs}
          educations={educations}
          addEducation={onClickAddEducationBtn}
          deleteEducation={onClickDeleteEducationBtn}
        />
      </div>
      <Resume
        innerRef={resumeEl}
        person={personal}
        skills={skills}
        works={works}
        educations={educations}
        checkmark={checkmark}
      />
    </div>
  );
}

export default Main;
