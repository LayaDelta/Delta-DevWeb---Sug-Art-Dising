import { useTranslation } from "react-i18next";
import Logo from "../../atoms/logo/Logo";
import Paragraph from "../../atoms/paragraph/Paragraph";
import Title from "../../atoms/title/Title";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer" id="contact">
      <div className="logo">
        <Logo
          title="</Delta-DevWeb\>"
          subtitle="Hollow Mind"
          imglogo="./assets/icons/Logo.png"
        />
      </div>

      <div className="footer-section">
        <Title text={t('footer.contact')} />
        <Paragraph text={`${t('footer.email')}: JuanmLaya0406@gmail.com`} />
        <Paragraph text={`${t('footer.phone')}: +58 04264840215`} />
        <Paragraph text={`${t('footer.address')}: ${t('footer.addressValue')}`} />
      </div>

      <div className="footer-section social-section">
        <Title text={t('footer.socialNetworks')} />
        <div className="social-buttons">
          <a
            href="https://www.linkedin.com/in/juan-miguel-laya-muñoz-124232309/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button linkedin"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/LayaDelta"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button github"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="copyright">
        {t('footer.copyright')}
      </div>
    </footer>
  );
};

export default Footer;