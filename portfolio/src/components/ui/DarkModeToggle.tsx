import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function DarkModeToggle() {
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? t("switch_to_light_mode") : t("switch_to_dark_mode")}
      title={isDark ? t("switchToLightMode") : t("switchToDarkMode")}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        width: "32px",
        height: "32px",
      }}
    >
      <img
        src={isDark ? "/svg/dark_mode.svg" : "/svg/light_mode.svg"  }
        alt={isDark ? t("switch_to_light_mode") : t("switch_to_dark_mode")}
        style={{ width: "100%", height: "100%" }}
      />
    </button>
  );
}

export default DarkModeToggle;
