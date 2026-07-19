import { memo } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../atoms/container/Container";
import Icon from "../../atoms/icon/Icon";
import Title from "../../atoms/title/Title";
import "./ToolList.css";

const ToolList = ({ tools, isVisible }) => {
  const { t } = useTranslation();
  return (
    <Container className={`tool-list-container ${isVisible ? 'visible' : ''}`}>
      <Title text={t("home.skills.categories.Herramientas", "Herramientas")} />
      <div className="tool-list">
        {tools.map((tool, index) => (
          <div 
            key={tool.name} 
            className="tool-item"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <Icon src={tool.icon} alt={tool.name} />
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default memo(ToolList);