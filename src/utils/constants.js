import flagPL from "../assets/pl.png";
import flagGB from "../assets/gb.png";

export const COLOR_BUTTONS = {
  load: "#93c5fd",
  pdf: "#34d399",
  reset: "#f87171",
};

export const GB_WORDS = {
  email: "e-mail",
  phone: "phone number",
  description: "description",
  experience: "experience",
  education: "education",
  skills: "skills0",
};

export const PL_WORDS = {
  email: "e-mail",
  phone: "numer telefonu",
  description: "podusmowanie",
  experience: "doświadczenie",
  education: "wykształcenie",
  skills: "umiejętności",
};

export const LANGUAGES = [
  { id: "gb", url: flagGB, words: GB_WORDS },
  { id: "pl", url: flagPL, words: PL_WORDS },
];

export const COLORS = ["#03447d", "#065f46", "#be123c"];

export const FONTS = ["Montserrat", "Times New Roman", "Arial"];

export const LAYOUTS = ["top", "left", "right"];

export const INIT_SETTINGS = {
  color: "#03447d",
  fontFamily: "Montserrat",
  layout: "left",
  language: "gb",
};
