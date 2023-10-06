import "../styles/style.css";

import React, { createContext, useState } from "react";

import Heading from "./Heading";
import Main from "./Main";
import Footer from "./Footer";
import { INIT_SETTINGS } from "../utils/constants";

export const SettingsContext = createContext(null);
export const CVResumeContext = createContext(null);

const App = () => {
  const [settings, setSettings] = useState(INIT_SETTINGS);
  const [openSettings, setOpenSettings] = useState(false);

  const changeResumeLanguage = (language) => {
    setSettings({ ...settings, language: language });
  };

  const changeResumeColor = (color) => {
    setSettings({ ...settings, color });
  };

  const changeResumeLayout = (layout) => {
    setSettings({ ...settings, layout });
  };

  const changeResumeFont = (font) => {
    setSettings({ ...settings, fontFamily: font });
  };

  return (
    <>
      <CVResumeContext.Provider value={{ openSettings, setOpenSettings }}>
        <SettingsContext.Provider
          value={{
            settings,
            changeResumeLanguage,
            changeResumeColor,
            changeResumeLayout,
            changeResumeFont,
          }}
        >
          <Heading />
          <Main />
          <Footer />
        </SettingsContext.Provider>
      </CVResumeContext.Provider>
    </>
  );
};

export default App;
