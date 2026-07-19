import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button 
        className={`language-btn ${i18n.language === 'es' || i18n.language?.startsWith('es') ? 'active' : ''}`}
        onClick={() => changeLanguage('es')}
      >
        ES
      </button>
      <button 
        className={`language-btn ${i18n.language === 'en' || i18n.language?.startsWith('en') ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
