import { resetIcon } from "../Icons/icons";
import { COLORS, FONTS, LANGUAGES, LAYOUTS } from "../../utils/constants";

const Settings = () => {
  const languageControls = (
    <>
      {LANGUAGES.map((lang) => (
        <button key={lang.id} className="settings-btn">
          <img src={lang.url} alt={`flag ${lang.id}`} />
        </button>
      ))}
    </>
  );

  const layoutsControls = (
    <>
      {LAYOUTS.map((layout) => (
        <button key={layout} className="settings-btn">
          <div className={`layout-${layout}`}>
            <span className="first"></span>
            <span className="second"></span>
          </div>
        </button>
      ))}
    </>
  );

  const colorControls = (
    <>
      {COLORS.map((color) => (
        <button
          style={{ backgroundColor: color }}
          key={color}
          className="settings-btn"
        ></button>
      ))}
    </>
  );

  const fontControls = (
    <>
      {FONTS.map((font) => (
        <button style={{ fontFamily: font }} className="settings-btn">
          Aa
        </button>
      ))}
    </>
  );

  return (
    <div className="settings">
      <div className="settings-row">
        <h3 className="h3">Customize Resume</h3>
        <button className="settings-close">{resetIcon}</button>
      </div>

      <div className="settings-wrapper">
        <SettingsControls heading="Language">
          {languageControls}
        </SettingsControls>
        <SettingsControls heading="Layout">{layoutsControls}</SettingsControls>
        <SettingsControls heading="Color">{colorControls}</SettingsControls>
        <SettingsControls heading="Font">{fontControls}</SettingsControls>
        {/* <div className="settings-row">
          <h4 className="h4">Language:</h4>
        
          <div className="settings-controls">
            <button className="settings-btn">
              <img src={gbFlag} alt="gb flag" />
            </button>
            <button className="settings-btn">
              <img src={plFlag} alt="pl flag" />
            </button>
          </div>
        </div> */}

        {/* <div className="settings-row">
          <h4 className="h4">Layout:</h4>
          <div className="settings-controls">
            <button className="settings-btn">
              <div className="layout-top">
                <span className="first"></span>
                <span className="second"></span>
              </div>
            </button>
            <button className="settings-btn">
              <div className="layout-left">
                <span className="first"></span>
                <span className="second"></span>
              </div>
            </button>
            <button className="settings-btn">
              <div className="layout-right">
                <span className="first"></span>
                <span className="second"></span>
              </div>
            </button>
          </div>
        </div> */}

        {/* <div className="settings-row">
          <h4 className="h4">Color:</h4>
          <div className="settings-controls">
            <button
              style={{ backgroundColor: "#03447d" }}
              className="settings-btn"
            ></button>
            <button
              style={{ backgroundColor: "#065f46" }}
              className="settings-btn"
            ></button>
            <button
              style={{ backgroundColor: "#be123c" }}
              className="settings-btn"
            ></button>
          </div>
        </div> */}
        {/* <div className="settings-row">
          <h4 className="h4">Fonts:</h4>
          <div className="settings-controls">
            <button
              style={{ fontFamily: "Montserrat" }}
              className="settings-btn"
            >
              Aa
            </button>
            <button
              style={{ fontFamily: "Times New Roman" }}
              className="settings-btn"
            >
              Aa
            </button>

            <button style={{ fontFamily: "Arial" }} className="settings-btn">
              Aa
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

const SettingsControls = ({ children, heading }) => (
  <div className="settings-row">
    <h4 className="h4">{heading}:</h4>
    <div className="settings-controls">{children}</div>
  </div>
);

export default Settings;
