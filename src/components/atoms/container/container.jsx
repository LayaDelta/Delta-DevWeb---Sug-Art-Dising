import "./Container.css";

const Container = ({ children, className = "", fluid = false, ...props }) => {
  const containerClass = fluid ? "container-fluid" : "container";
  
  return (
    <div className={`${containerClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;