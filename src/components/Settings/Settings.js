import { resetIcon } from "../Icons/icons";
import { COLORS, FONTS, LANGUAGES, LAYOUTS } from "../../utils/constants";
import { useContext } from "react";
import { CVResumeContext, SettingsContext } from "../App";

const getClassName = (firstValue, secondValue) => {
  return firstValue === secondValue ? "settings-btn active" : "settings-btn";
};

const Settings = () => {
  const { setOpenSettings } = useContext(CVResumeContext);
  const {
    settings,
    changeResumeLanguage,
    changeResumeColor,
    changeResumeLayout,
    changeResumeFont,
  } = useContext(SettingsContext);

  const languageControls = (
    <>
      {LANGUAGES.map((lang) => {
        const className = getClassName(lang.id, settings.language.id);

        return (
          <button
            onClick={() => {
              changeResumeLanguage(lang);
            }}
            key={lang.id}
            className={className}
          >
            <img src={lang.url} alt={`flag ${lang.id}`} />
          </button>
        );
      })}
    </>
  );

  const layoutsControls = (
    <>
      {LAYOUTS.map((layout) => (
        <button
          onClick={() => {
            changeResumeLayout(layout);
          }}
          key={layout}
          className={getClassName(layout, settings.layout)}
        >
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
          onClick={() => {
            changeResumeColor(color);
          }}
          style={{ backgroundColor: color }}
          key={color}
          className={getClassName(color, settings.color)}
        ></button>
      ))}
    </>
  );

  const fontControls = (
    <>
      {FONTS.map((font) => (
        <button
          onClick={() => {
            changeResumeFont(font);
          }}
          key={font}
          style={{ fontFamily: font }}
          className={getClassName(font, settings.fontFamily)}
        >
          Aa
        </button>
      ))}
    </>
  );

  return (
    <div className="settings">
      <div className="settings-row">
        <h3 className="h3">Customize Resume</h3>
        <button
          onClick={() => {
            setOpenSettings(false);
          }}
          className="settings-close"
        >
          &#10005;
          {/* {resetIcon} */}
        </button>
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
