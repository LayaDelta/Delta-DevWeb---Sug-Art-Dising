import "./Button.css";

const Button = ({ type = "button", children, onClick, className = "", disabled = false }) => {
  return (
    <button
      type={type}
      className={`custom-button ${className} ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
