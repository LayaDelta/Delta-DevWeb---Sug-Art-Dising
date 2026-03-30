import Image from "../../atoms/Image/image";
import Paragraph from "../../atoms/paragraph/paragraph";
import Title from "../../atoms/title/title";
import "./wSecction.css"; // ← Cambia el nombre del CSS también

const WelcomeSection = ({ imgSrc, titleText, paragraphText }) => { 
  return (
    <div className="welcome-section">
      <Image src={imgSrc} alt="Welcome Image" />
      <div className="welcome-text">
        <Title text={titleText} />
        <Paragraph text={paragraphText} />
      </div>
    </div>
  );
};

export default WelcomeSection; // 