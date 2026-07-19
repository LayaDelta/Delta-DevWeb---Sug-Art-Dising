import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../atoms/button/Button";
import Input from "../../atoms/input/Input";
import TextArea from "../../atoms/textarea/TextArea";
import Title from "../../atoms/title/Title";
import FormField from "../../molecules/FormField/FormField";
import "./ContactSection.css";

const ContactSection = () => {
  const { t } = useTranslation();
  const form = useRef();

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);
    // Reemplaza estos valores con tus propios IDs de EmailJS
    const SERVICE_ID = "service_qvjj2rf";
    const TEMPLATE_ID = "template_101f7i2";
    const PUBLIC_KEY = "UCIm6xoaVqmTFUn5y";


    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setStatus("success");
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        setStatus("error");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <Title text={t("home.contact.title")} />
        <p className="contact-subtitle">{t("home.contact.subtitle")}</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <FormField label={t("home.contact.nameLabel")}>
            <Input
              name="user_name"
              placeholder={t("home.contact.namePlaceholder")}
              required
            />
          </FormField>

          <FormField label={t("home.contact.emailLabel")}>
            <Input
              type="email"
              name="user_email"
              placeholder={t("home.contact.emailPlaceholder")}
              required
            />
          </FormField>

          <FormField label={t("home.contact.messageLabel")}>
            <TextArea
              name="message"
              placeholder={t("home.contact.messagePlaceholder")}
              required
            />
          </FormField>

          <div className="form-actions">
            <Button
              type="submit"
              disabled={isSending}
            >
              {isSending ? t("home.contact.sending") : t("home.contact.send")}
            </Button>
          </div>

          {status === "success" && (
            <p className="status-message success">{t("home.contact.success")}</p>
          )}
          {status === "error" && (
            <p className="status-message error">{t("home.contact.error")}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
