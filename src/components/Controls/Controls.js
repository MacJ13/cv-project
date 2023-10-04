import React from "react";
import { useReactToPrint } from "react-to-print";
import Button from "./ControlButton";
import { cvIcon, pdfIcon, resetIcon } from "../Icons/icons";
import { COLOR_BUTTONS } from "../../utils/constants";

const Controls = (props) => {
  const handlePrint = useReactToPrint({
    content: () => props.resumeTag.current,
    documentTitle: "CV-resume",
  });

  const { load, pdf, reset } = COLOR_BUTTONS;

  return (
    <div className="controls">
      <Button bgColor={load} onClick={props.onClickLoad}>
        <span>Load Example</span>

        {cvIcon}
      </Button>
      <Button bgColor={pdf} onClick={handlePrint}>
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
