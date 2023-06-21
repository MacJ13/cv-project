const Form = ({ title, children }) => {
  return (
    <form className="form">
      <h3 className="h3">{title}</h3>
      {children}
    </form>
  );
};

export default Form;
