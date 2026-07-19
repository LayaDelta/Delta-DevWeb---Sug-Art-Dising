import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { smoothScrollTo } from "../../../utils/scroll";
import Image from "../../atoms/image/Image";
import Paragraph from "../../atoms/paragraph/Paragraph";
import Title from "../../atoms/title/Title";
import "./WelcomeSection.css";

const calculateAge = () => {
  const today = new Date();
  const birthDate = new Date('2006-01-04');
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
};

const useCountUp = (end, duration) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return count;
};

const WelcomeSection = ({ imgSrc, titleText, paragraphText }) => { 
  const { t } = useTranslation();
  const targetAge = calculateAge();
  const animatedAge = useCountUp(targetAge, 2000);
  const animatedExp = useCountUp(2, 2000);

  return (
    <div className="welcome-section">
      <div className="profile-img-container">
        <Image src={imgSrc} alt="Welcome Image" />
      </div>
      <div className="badges-container">
        <div className="age-badge">
          <span className="age-label">{t('home.welcome.ageLabel', 'Edad: ')}</span>
          <span className="age-number">{animatedAge}</span>
        </div>
        <div className="age-badge">
          <span className="age-label">{t('home.welcome.expLabel', 'Años programando FrontEnd: ')}</span>
          <span className="age-number">{animatedExp}</span>
        </div>
      </div>
      <div className="welcome-text">
        <Title text={titleText} />
        <Paragraph text={paragraphText} />
      </div>

      <div 
        className="scroll-indicator" 
        onClick={() => smoothScrollTo("skills", 80)}
        aria-label="Scroll down"
      >
        <span className="arrow"></span>
      </div>
    </div>
  );
};

export default WelcomeSection;