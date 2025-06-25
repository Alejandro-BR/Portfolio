import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      title={currentLang === "es" ? t("switchToEnglish") : t("switchToSpanish")}
      aria-label={currentLang === "es" ? t("switchToEnglish") : t("switchToSpanish")}
      style={{ cursor: "pointer", border: "none", background: "none", padding: 0 }}
    >
      <img
        src={currentLang === "es" ? "/svg/spain-flag.svg" : "/svg/united-kingdom-flag.svg"}
        alt={currentLang === "es" ? "Español" : "English"}
        width={24}
        height={24}
      />
    </button>
  );
}

export default LanguageSwitcher;
