import Logo from "../../atoms/logo/logo";
import Paragraph from "../../atoms/paragraph/paragraph";
import Title from "../../atoms/title/title";
import "./footer.css";

const Footer = () => {
  return (    
    <footer className="footer">
      <div className="logo">
        <Logo 
          title="Delta DevWeb"
          subtitle="Sug-Art-Dising"
          imglogo="./assets/icons/Logo.png"
        />
      </div>
      
      <div className="footer-section">
        <Title text="Contacto" />
        <Paragraph text="Correo: JuanmLaya0406@gmail.com" />
        <Paragraph text="Teléfono: +58 04264840215" />
        <Paragraph text="Dirección: San Juan de los Morros, Edo.Guarico, Venezuela" />
      </div>
      
      <div className="footer-section">
        <Title text="Redes Sociales" />
        <Paragraph text="LinkedIn: https://www.linkedin.com/in/juan-miguel-laya-muñoz-124232309/" />
        <Paragraph text="GitHub: https://github.com/LayaDelta" />
      </div>
      
      <div className="copyright">
        © 2026 Juan Miguel Laya Muñoz. Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;