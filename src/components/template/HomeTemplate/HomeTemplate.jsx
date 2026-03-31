import { skills } from "../../../Skills.js";
import SkillWall from "../../organims/SkillWall/SkillWall";
import WelcomeSection from "../../organims/welcomeSecction/wSecction.jsx";
import "./HomeTemplate.css";

const HomeTemplate = () => {
  return (
    <div className="home-template-container">
      <WelcomeSection 
        imgSrc="./assets/icons/Logo.png"
        titleText="Desarrollador - web | Front-End"
        paragraphText="Hola soy Juan Laya, Desarrollador web con principal nicho en el Front-End,  utilizando React.js, Node.js y MySQL. Estudiante de Ingeniería en Sistemas Avanzados en la Universidad Nacional Experimental de los Llanos Centrales «Rómulo Gallegos». Combino habilidades técnicas sólidas con una mentalidad analítica, metódica y orientada a los detalles."
      />
      
      <SkillWall 
        title="Habilidades Técnicas"
        text="Tecnologías y herramientas que domino en mi día a día como desarrollador"
        skills={skills}
      />
    </div>
  );
};

export default HomeTemplate;