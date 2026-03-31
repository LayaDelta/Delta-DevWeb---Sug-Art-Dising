import Container from "../../atoms/container/container";
import Paragraph from "../../atoms/paragraph/paragraph";
import Title from "../../atoms/title/title";
import SkillCategory from "../../molecules/SkillCategory/SkillCategory";
import "./skillWall.css";

const SkillWall = ({ title, text, skills }) => {
  return (
    <Container className="skill-wall">
      <Title text={title} />
      <Paragraph text={text} />
      <div className="skills-grid">
        {skills.map((category, index) => (
          <SkillCategory 
            key={index}
            category={category.category}
            skills={category.skills}
          />
        ))}
      </div>
    </Container>
  );
};

export default SkillWall;