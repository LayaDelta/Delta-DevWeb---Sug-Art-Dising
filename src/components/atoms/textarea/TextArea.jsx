import "./TextArea.css";

const TextArea = ({ placeholder, name, value, onChange, required = false, rows = 5 }) => {
  return (
    <textarea
      className="custom-textarea"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      rows={rows}
    />
  );
};

export default TextArea;
