import { skills } from "../../../Skills.js";
import SkillsWall from "../../organims/SkillsWall/SkillsWall";
import WelcomeSection from "../../organims/welcomeSecction/wSecction";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <WelcomeSection 
        imgSrc="/assets/Logo.png"
        titleText="Desarrollador - web | Front-End"
        paragraphText="Hola soy Juan Laya, Desarrollador web con principal nicho en el Front-End,  utilizando React.js, Node.js y MySQL. Estudiante de Ingeniería en Sistemas Avanzados en la Universidad Nacional Experimental de los Llanos Centrales «Rómulo Gallegos». Combino habilidades técnicas sólidas con una mentalidad analítica, metódica y orientada a los detalles."
      />
      
      <SkillsWall skills={skills} />
    </div>
  );
};

export default Home;