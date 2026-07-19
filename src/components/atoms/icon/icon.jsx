import "./Icon.css";

const Icon = ({ src, alt, className, loading = "lazy" }) => {
  return <img src={src} alt={alt} className={`icon ${className}`} loading={loading} />;
};

export default Icon;