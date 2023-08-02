const Button = ({ id, onClick, children }) => {
  return (
    <button id={id} className="control-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
