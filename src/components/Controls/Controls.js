import React from "react";
import Button from "./ControlButton";
import { cvIcon, pdfIcon, resetIcon } from "../Icons/icons";
import { COLOR_BUTTONS } from "../../utils/constants";

const Controls = (props) => {
  const { load, pdf, reset } = COLOR_BUTTONS;

  return (
    <div className="controls">
      <Button bgColor={load} onClick={props.onClickLoad}>
        <span>Load Example</span>

        {cvIcon}
      </Button>
      <Button bgColor={pdf} onClick={props.onClickPrint}>
        <span>Create PDF</span>
        {pdfIcon}
      </Button>
      <Button bgColor={reset} onClick={props.onClickReset}>
        <span>Reset All</span>
        {resetIcon}
      </Button>
    </div>
  );
};

export default Controls;
