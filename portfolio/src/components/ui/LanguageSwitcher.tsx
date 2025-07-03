import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    localStorage.setItem("selectedLanguage", newLang);
    document.documentElement.lang = newLang;
  };

  return (
    <button
      onClick={toggleLanguage}
      className={styles.languageButton}
      title={currentLang === "es" ? "Switch to English" : "Cambiar a Español"}
      aria-label={currentLang === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      {currentLang.toUpperCase()}
    </button>
  );
}

export default LanguageSwitcher;
