import Container from "../../atoms/container/container";
import Title from "../../atoms/title/title";
import SkillItem from "../SkillItem/SkillItem";
import ToolList from "../ToolList/ToolList";
import "./skillCategory.css";

const SkillCategory = ({ category, skills }) => {
  const tools = skills.filter(skill => skill.isTool === true);
  const technicalSkills = skills.filter(skill => !skill.isTool);

  return (
    <Container className="skill-category">
      <Title text={category} />
      
      {technicalSkills.length > 0 && (
        <div className="technical-skills">
          {technicalSkills.map((skill, index) => (
            <SkillItem 
              key={index}
              name={skill.name}
              icon={skill.icon}
              description={skill.description}
              percentage={skill.percentage}
            />
          ))}
        </div>
      )}
      
      {tools.length > 0 && <ToolList tools={tools} />}
    </Container>
  );
};

export default SkillCategory;