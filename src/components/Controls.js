import React from "react";
import ReactToPrint from "react-to-print";

const Controls = (props) => {
  return (
    <div className="controls">
      <button id="btn-load" onClick={props.onClickLoad} className="control-btn">
        Load Example
      </button>
      <button
        id="btn-reset"
        onClick={props.onClickReset}
        className="control-btn"
      >
        Reset All{" "}
      </button>
      <ReactToPrint
        documentTitle="Simple CV"
        trigger={() => {
          return (
            <button id="btn-pdf" className="control-btn">
              Create PDF
            </button>
          );
        }}
        content={() => props.resumeTag.current}
      />
    </div>
  );
};

export default Controls;
