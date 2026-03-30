import Container from "../../atoms/container/container";
import Paragraph from "../../atoms/paragraph/paragraph";
import "./SkillsSection.css";

const SkillsSection = (Title,Text,Children) => {
  return (
    <Container className="skills-section">
        {Children}
      <Title text={Title} />
      <Paragraph text={Text} />
    </Container>
  );
};

export default SkillsSection;