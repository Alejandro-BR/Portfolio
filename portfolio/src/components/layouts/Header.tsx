import { useEffect, useState } from "react";
import DarkModeToggle from "../ui/DarkModeToggle";
import styles from "./Header.module.css";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const html = document.documentElement;
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Alejandro BR</div>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>{t("aboutMeTitle")}</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>{t("experience")}</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>{t("projects")}</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>{t("education")}</a>
        </nav>

        <div className={styles.controls}>
          <DarkModeToggle />
          <LanguageSwitcher />
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <div className={`${styles.burger} ${menuOpen ? styles.open : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
