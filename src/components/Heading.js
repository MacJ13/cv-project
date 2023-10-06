import { useContext } from "react";
import { settingsIcon } from "./Icons/icons";
import { CVResumeContext } from "./App";

const Heading = () => {
  const { setOpenSettings } = useContext(CVResumeContext);

  return (
    <div className="heading">
      <h1 className="h1">Resume CV Creator</h1>
      <button
        type="button"
        aria-label="Open settings"
        onClick={() => setOpenSettings(true)}
        className="settings-open-btn"
      >
        {settingsIcon}
      </button>
    </div>
  );
};

export default Heading;
