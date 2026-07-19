import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { smoothScrollTo } from "../../../utils/scroll";
import Logo from "../../atoms/logo/Logo";
import LanguageSwitcher from "../../atoms/languageswitcher/LanguageSwitcher";
import "./Navbar.css";

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const navbarHeight = 80;
    smoothScrollTo(id, navbarHeight);
    closeMenu();
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Logo
            title="</Delta-DevWeb\>"
            subtitle="Hollow Mind"
            imglogo="./assets/icons/Logo.png"
          />
        </div>
        
        {/* Los links ahora son hijos directos de la navbar para mejor control del fixed en móvil */}
        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>{t('navbar.home')}</a>
          <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>{t('navbar.skills')}</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>{t('navbar.contact')}</a>
        </div>

        <div className="navbar-controls">
          <LanguageSwitcher />

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
        </div>

        {/* Overlay para cerrar menú al hacer clic fuera - Movido dentro del nav para control de z-index */}
        <div 
          className={`navbar-overlay ${isMenuOpen ? 'open' : ''}`}
          onClick={closeMenu}
        ></div>
      </nav> 
    </>
  );
};

export default Navbar;