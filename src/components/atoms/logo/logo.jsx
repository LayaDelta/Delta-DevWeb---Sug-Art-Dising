// components/atoms/logo/Logo.jsx
import './Logo.css'; // ✅ Importa el CSS

const logo = ({ title, subtitle, imglogo }) => {
  return (
    <div className="logo-container">
      <img src={imglogo} alt={title} />
      <div className="logo-text"> {/* ✅ Contenedor para texto */}
        <h1>{title}</h1>  
        <p>{subtitle}</p>  
      </div>
    </div>
  );
};

export default logo;