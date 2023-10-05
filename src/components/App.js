import "../styles/style.css";

import React, { createContext, useState } from "react";

import Heading from "./Heading";
import Main from "./Main";
import Footer from "./Footer";
import { INIT_SETTINGS } from "../utils/constants";

export const SettingsContext = createContext(null);

const App = () => {
  const [settings, setSettings] = useState(INIT_SETTINGS);

  return (
    <>
      <SettingsContext.Provider value={{ settings }}>
        <Heading />
        <Main />
        <Footer />
      </SettingsContext.Provider>
    </>
  );
};

export default App;
