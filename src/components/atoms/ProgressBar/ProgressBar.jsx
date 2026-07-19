import { useEffect, useRef } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ percentage, isVisible }) => {
  const fillRef = useRef(null);

  useEffect(() => {
    if (isVisible && fillRef.current) {
      fillRef.current.style.transform = `scaleX(${percentage / 100})`;
    }
  }, [isVisible, percentage]);

  return (
    <div className="progress-bar-container">
      <div 
        ref={fillRef}
        className="progress-bar-fill" 
      ></div>
    </div>
  );
};

export default ProgressBar;