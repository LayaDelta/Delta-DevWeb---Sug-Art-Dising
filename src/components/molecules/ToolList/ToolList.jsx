import Container from "../../atoms/container/container";
import Icon from "../../atoms/icon/icon";
import Title from "../../atoms/title/title";
import "./ToolList.css";

const ToolList = ({ tools }) => {
  return (
    <Container className="tool-list-container">
      <Title text="Herramientas" />
      <div className="tool-list">
        {tools.map((tool, index) => (
          <div key={index} className="tool-item">
            <Icon src={tool.icon} alt={tool.name} />
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ToolList;