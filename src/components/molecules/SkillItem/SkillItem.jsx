import { useEffect, useRef } from "react";
import Container from "../../atoms/container/container";
import Icon from "../../atoms/icon/icon";
import Paragraph from "../../atoms/paragraph/paragraph";
import ProgressBar from "../../atoms/progressbar/progressbar";
import Title from "../../atoms/title/title";
import "./SkillItem.css";

const SkillItem = ({ name, icon, description, percentage }) => {
  const skillRef = useRef(null);

  useEffect(() => {
    const currentRef = skillRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBarFill = entry.target.querySelector('.progress-bar-fill');
            if (progressBarFill) {
              progressBarFill.style.setProperty('--target-width', `${percentage}%`);
              progressBarFill.style.width = `${percentage}%`;
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [percentage]);

  return (
    <Container className="skill-item" ref={skillRef}>
      <div className="skill-item-header">
        <Icon src={icon} alt={name} />
        <div className="skill-item-info">
          <Title text={name} />
          <Paragraph text={description} />
        </div>
      </div>
      <ProgressBar percentage={percentage} />
    </Container>
  );
};

export default SkillItem;