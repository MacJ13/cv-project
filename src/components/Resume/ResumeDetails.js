import { useContext } from "react";
import { SettingsContext } from "../App";

const ResumeDetails = ({ cls, title, children }) => {
  const { settings } = useContext(SettingsContext);
  const { color } = settings;

  return (
    <div className={cls}>
      <h4 style={{ color }} className="h4">
        {title}
      </h4>
      {children}
    </div>
  );
};

export default ResumeDetails;
