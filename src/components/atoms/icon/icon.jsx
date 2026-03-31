import "./icon.css";

const Icon = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={`icon ${className}`} />;
};

export default Icon;