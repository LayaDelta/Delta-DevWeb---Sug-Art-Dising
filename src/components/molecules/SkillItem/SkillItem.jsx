import { memo } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../atoms/container/Container";
import Icon from "../../atoms/icon/Icon";
import Paragraph from "../../atoms/paragraph/Paragraph";
import Title from "../../atoms/title/Title";
import "./SkillItem.css";

const SkillItem = ({ name, icon, description, percentage, isVisible }) => {
  const { t } = useTranslation();
  return (
    <Container className={`skill-item ${isVisible ? 'visible' : ''}`}>
      <div className="skill-item-header">
        <Icon src={icon} alt={name} />
        <div className="skill-item-info">
          <Title text={name} />
          <Paragraph text={t(`home.skills.descriptions.${name}`, description)} />
        </div>
      </div>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ transform: `scaleX(${isVisible ? percentage / 100 : 0})` }}
        ></div>
      </div>
    </Container>
  );
};

export default memo(SkillItem);