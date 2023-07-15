import Controls from "./Controls";

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
} from "../config";

import { useCallback, useRef, useState } from "react";

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

  const [works, setWorks] = useState([{ ...workData }]);
  const [educations, setEducations] = useState([{ ...educationData }]);

  const [skills, setSkills] = useState([""]);

  const [checkmark, setCheckmark] = useState(true);

  const onChangeCheckmark = () => {
    setCheckmark(!checkmark);
  };

  const onChangePersonalInputs = (target) => {
    const { name, value } = target;
    setPersonal({ ...personal, [name]: value });
  };

  const onChangeSkillInputs = (target) => {
    const { index, value } = target;
    const updatedSkills = skills.map((skill, i) => {
      if (i === index) {
        return value;
      }
      return skill;
    });

    setSkills([...updatedSkills]);
  };

  const onChangeWorkInputs = (target) => {
    const { index, name, value } = target;

    const updatedWorks = works.map((work, i) => {
      if (i === index) {
        return { ...work, [name]: value };
      }

      return work;
    });

    setWorks([...updatedWorks]);
  };

  const onChangeEducationInputs = useCallback(
    (target) => {
      console("change educations ", educations);
      const { index, name, value } = target;

      const updatedEducations = educations.map((education, i) => {
        if (i === index) {
          return { ...education, [name]: value };
        }

        return education;
      });

      setEducations([...updatedEducations]);
    },
    [educations]
  );

  const onClickResetBtn = useCallback(() => {
    setPersonal(() => ({
      name: "",
      title: "",
      photoSrc: "",
      email: "",
      tel: "",
      description: "",
    }));
    setWorks(() => [{ ...workData }]);
    setEducations(() => [{ ...educationData }]);
    if (!checkmark) return;
    setSkills([""]);

    console.log(personal);
  }, [personal]);

  // const onClickResetBtn = () => {
  //   setPersonal({
  //     name: "",
  //     title: "",
  //     photoSrc: "",
  //     email: "",
  //     tel: "",
  //     description: "",
  //   });
  //   setWorks([{ ...workData }]);
  //   setEducations([{ ...educationData }]);
  // };

  const onClickLoadBtn = () => {
    setCheckmark(true);
    setPersonal({ ...examplePersonalData });
    setWorks([...exampleWorks]);
    setEducations([...exampleEducation]);
    setSkills([...exampleSkills]);
  };

  const onClickAddSkillBtn = () => {
    if (!checkmark) return;
    setSkills([...skills, ""]);
  };

  const onClickDeleteSkillBtn = () => {
    if (!checkmark) return;
    setSkills([...skills.slice(0, -1)]);
  };

  const onClickAddWorkBtn = useCallback(() => {
    setWorks([...works, { ...workData }]);
    setEducations([...educations, { ...educationData }]);
  }, [works, educations]);

  const onClickDeleteWorkBtn = () => {
    setWorks([...works.slice(0, -1)]);
  };

  const onClickAddEducationBtn = useCallback(() => {
    setEducations([...educations, { ...educationData }]);
  }, [educations]);

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
        //   innerRef={this.resumeTag}
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
