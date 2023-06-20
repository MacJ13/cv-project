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
        Reset All
      </button>
      <button id="btn-pdf" className="control-btn">
        Create PDF
      </button>
    </div>
  );
};

export default Controls;
