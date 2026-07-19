import { forwardRef, memo } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../atoms/container/Container";
import Title from "../../atoms/title/Title";
import SkillItem from "../SkillItem/SkillItem";
import ToolList from "../ToolList/ToolList";
import "./SkillCategory.css";

const SkillCategory = forwardRef(({ category, skills, isVisible }, ref) => {
  const { t } = useTranslation();
  const tools = skills.filter(skill => skill.isTool === true);
  const technicalSkills = skills.filter(skill => !skill.isTool);

  return (
    <Container className={`skill-category ${isVisible ? 'visible' : ''}`} ref={ref}>
      <Title text={t(`home.skills.categories.${category}`, category)} />
      
      {technicalSkills.length > 0 && (
        <div className="technical-skills">
          {technicalSkills.map((skill) => (
            <SkillItem 
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              description={skill.description}
              percentage={skill.percentage}
              isVisible={isVisible}
            />
          ))}
        </div>
      )}
      
      {tools.length > 0 && <ToolList tools={tools} isVisible={isVisible} />}
    </Container>
  );
});

SkillCategory.displayName = 'SkillCategory';

export default memo(SkillCategory);