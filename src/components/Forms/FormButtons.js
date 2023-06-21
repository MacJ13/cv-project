const FormButtons = (props) => {
  return (
    <div className="form-btns">
      <button type="button" onClick={props.onClickAdd} className="form-btn">
        Add
      </button>
      {props.formLength === 0 || (
        <button
          type="button"
          onClick={props.onClickDelete}
          className="form-btn"
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default FormButtons;
