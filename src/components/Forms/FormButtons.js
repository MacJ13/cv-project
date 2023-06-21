const FormButtons = (props) => {
  console.log(props);
  return (
    <div className="form-btns">
      <button type="button" onClick={props.onClickAdd} className="form-btn">
        Add
      </button>
      <button type="button" onClick={props.onClickDelete} className="form-btn">
        Delete
      </button>
    </div>
  );
};

export default FormButtons;
