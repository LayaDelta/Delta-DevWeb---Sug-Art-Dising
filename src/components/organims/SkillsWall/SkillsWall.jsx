import Container from "../../atoms/container/container";
import "./SkillsWall.css";

const SkillsWall = ({ skills }) => {
  return (
    <Container className="skills-wall">
      {skills.map((section, index) => (
        <div key={index} className="skills-section-container">
          <h2 className="section-title">{section.category}</h2>
          <div className="skills-grid">
            {section.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-item">
                {skill.icon && (
                  <div className="skill-icon">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                )}
                <h3 className="skill-name">{skill.name}</h3>
                {skill.description && (
                  <p className="skill-description">{skill.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </Container>
  );
};

export default SkillsWall;