import React from "react";
import { useReactToPrint } from "react-to-print";

const Controls = (props) => {
  const handlePrint = useReactToPrint({
    content: () => props.resumeTag.current,
    documentTitle: "CV-resume",
  });

  return (
    <div className="controls">
      <button id="btn-load" onClick={props.onClickLoad} className="control-btn">
        Load Example
      </button>
      <button id="btn-pdf" className="control-btn" onClick={handlePrint}>
        Create PDF
      </button>
      <button
        id="btn-reset"
        onClick={props.onClickReset}
        className="control-btn"
      >
        Reset All{" "}
      </button>
    </div>
  );
};

export default Controls;
