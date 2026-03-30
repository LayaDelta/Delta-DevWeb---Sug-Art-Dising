// components/organisms/navbar/Navbar.jsx
import { useState } from 'react';
import Logo from "../../atoms/logo/logo";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Logo
            title="Delta-DevWeb"
            subtitle="Sug-Art-Dising 1.0"
            imglogo="/assets/Logo.png"
          />
        </div>
        
        {/* Botón menú hamburguesa */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Links de navegación */}
       {/* <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          <Link href="/projects" onClick={closeMenu}>Projects</Link>
        </div> */}
      </nav> 
      
      {/* Overlay para cerrar menú al hacer clic fuera */}
       <div 
        className={`navbar-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Navbar;