import { useTranslation } from "react-i18next";
import { skills } from "../../../Skills.js";
import ContactSection from "../../organisms/ContactSection/ContactSection";
import SkillWall from "../../organisms/SkillWall/SkillWall";
import WelcomeSection from "../../organisms/WelcomeSection/WelcomeSection";
import "./HomeTemplate.css";

const HomeTemplate = () => {
  const { t } = useTranslation();

  return (
    <div className="home-template-container">
      <div id="home">
        <WelcomeSection 
          imgSrc="./assets/icons/Logo.png"
          titleText={t("home.welcome.title")}
          paragraphText={t("home.welcome.paragraph")}
        />
      </div>
      
      <div id="skills">
        <SkillWall 
          title={t("home.skills.title")}
          text={t("home.skills.text")}
          skills={skills}
        />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default HomeTemplate;