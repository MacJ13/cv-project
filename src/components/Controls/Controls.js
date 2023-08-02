import React from "react";
import { useReactToPrint } from "react-to-print";
import Button from "./ControlButton";

const Controls = (props) => {
  const handlePrint = useReactToPrint({
    content: () => props.resumeTag.current,
    documentTitle: "CV-resume",
  });

  return (
    <div className="controls">
      <Button id="btn-load" onClick={props.onClickLoad}>
        Load Example
      </Button>
      <Button id="btn-pdf" onClick={handlePrint}>
        Create PDF
      </Button>
      <Button id="btn-reset" onClick={props.onClickReset}>
        Reset All
      </Button>
    </div>
  );
};

export default Controls;
