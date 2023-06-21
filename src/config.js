import exampleImg from "./assets/example.jpg";

const examplePersonalData = {
  name: "Waclaw Jezioranski",
  title: "Senior Java Developer",
  photoSrc: exampleImg,
  email: "example@gmail.com",
  tel: "+48 123 456 789",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod felis eu egestas feugiat. Nullam semper maximus arcu, quis vulputate nunc fringilla eget. Integer sagittis tincidunt mi, at iaculis metus tempus sit amet.`,
};

const workData = {
  position: "",
  company: "",
  city: "",
  from: "",
  to: "",
};

const exampleWorks = [
  {
    position: "Senior Web Developer",
    company: "Facebook Inc.",
    city: "Menlo Park",
    from: "2015",
    to: "Present",
  },
  {
    position: "Junior Web Developer",
    company: "Tesla Inc.",
    city: "Palo Alto",
    from: "2012",
    to: "2015",
  },
  {
    position: "UI / UX Designer",
    company: "Google LLC",
    city: "Mountain View",
    from: "2010",
    to: "2012",
  },
];

const educationData = {
  university: "",
  city: "",
  degree: "",
  subject: "",
  from: "",
  to: "",
};

const exampleEducation = [
  {
    university: "University of Technology",
    city: "Oklahoma",
    degree: "Master",
    subject: "Science",
    from: "2008",
    to: "2010",
  },
  {
    university: "University of Design Art",
    city: "New York",
    degree: "Bachelor",
    subject: "Visual Art",
    from: "2005",
    to: "2008",
  },
];

export {
  examplePersonalData,
  workData,
  educationData,
  exampleWorks,
  exampleEducation,
};
