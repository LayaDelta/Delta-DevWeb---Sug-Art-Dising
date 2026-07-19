import "./FormField.css";

const FormField = ({ label, children, error }) => {
  return (
    <div className="form-field">
      {label && <label className="form-field-label">{label}</label>}
      <div className="form-field-control">
        {children}
      </div>
      {error && <span className="form-field-error">{error}</span>}
    </div>
  );
};

export default FormField;
