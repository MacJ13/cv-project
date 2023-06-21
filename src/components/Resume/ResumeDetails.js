const ResumeDetails = ({ cls, title, children }) => {
  return (
    <div className={cls}>
      <h4 className="h4">{title}</h4>
      {children}
    </div>
  );
};

export default ResumeDetails;
