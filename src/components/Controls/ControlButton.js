const Button = ({ bgColor, onClick, children }) => {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      className="control-btn"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
