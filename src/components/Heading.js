import { settingsIcon } from "./Icons/icons";

const Heading = () => {
  return (
    <div className="heading">
      <h1 className="h1">Resume CV Creator</h1>
      <button className="settings-open-btn">{settingsIcon}</button>
    </div>
  );
};

export default Heading;
