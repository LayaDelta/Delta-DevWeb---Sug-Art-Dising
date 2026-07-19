import "./Input.css";

const Input = ({ type = "text", placeholder, name, value, onChange, required = false }) => {
  return (
    <input
      type={type}
      className="custom-input"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default Input;
