import { memo, useEffect, useRef, useState } from "react";
import Container from "../../atoms/container/Container";
import Paragraph from "../../atoms/paragraph/Paragraph";
import Title from "../../atoms/title/Title";
import SkillCategory from "../../molecules/SkillCategory/SkillCategory";
import "./SkillWall.css";

const SkillWall = ({ title, text, skills }) => {
  const [visibleCategories, setVisibleCategories] = useState({});
  const categoryRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleCategories(prev => ({
              ...prev,
              [index]: true
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    categoryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Container className="skill-wall">
      <Title text={title} />
      <Paragraph text={text} />
      <div className="skills-grid">
        {skills.map((category, index) => (
          <div
            key={category.category || index}
            ref={el => categoryRefs.current[index] = el}
            data-index={index}
            className="category-wrapper"
          >
            <SkillCategory
              category={category.category}
              skills={category.skills}
              isVisible={visibleCategories[index] || false}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default memo(SkillWall);