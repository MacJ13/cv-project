import exampleImg from "../assets/example.jpg";

import { v4 as uuidv4 } from "uuid";

const examplePersonalData = {
  name: "Waclaw Jezioranski",
  title: "Senior Java Developer",
  photoSrc: exampleImg,
  email: "example@gmail.com",
  tel: "+48 123 456 789",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod felis eu egestas feugiat. Nullam semper maximus arcu, quis vulputate nunc fringilla eget. Integer sagittis tincidunt mi, at iaculis metus tempus sit amet.`,
};

const workData = {
  id: uuidv4(),
  position: "",
  company: "",
  city: "",
  from: "",
  to: "",
};

const exampleWorks = [
  {
    id: uuidv4(),
    position: "Senior Web Developer",
    company: "Facebook Inc.",
    city: "Menlo Park",
    from: "2015",
    to: "Present",
  },
  {
    id: uuidv4(),
    position: "Junior Web Developer",
    company: "Tesla Inc.",
    city: "Palo Alto",
    from: "2012",
    to: "2015",
  },
  {
    id: uuidv4(),
    position: "UI / UX Designer",
    company: "Google LLC",
    city: "Mountain View",
    from: "2010",
    to: "2012",
  },
];

const educationData = {
  id: uuidv4(),
  university: "",
  city: "",
  degree: "",
  subject: "",
  from: "",
  to: "",
};

const exampleEducation = [
  {
    id: uuidv4(),
    university: "University of Technology",
    city: "Oklahoma",
    degree: "Master",
    subject: "Science",
    from: "2008",
    to: "2010",
  },
  {
    id: uuidv4(),
    university: "University of Design Art",
    city: "New York",
    degree: "Bachelor",
    subject: "Visual Art",
    from: "2005",
    to: "2008",
  },
];

const skillsData = { id: uuidv4(), name: "" };

const exampleSkills = [
  { id: uuidv4(), name: "Html, Css" },
  { id: uuidv4(), name: "JavaScript" },
  { id: uuidv4(), name: "React js" },
  { id: uuidv4(), name: "Testing and programming" },
];

export {
  examplePersonalData,
  workData,
  educationData,
  skillsData,
  exampleWorks,
  exampleEducation,
  exampleSkills,
};
