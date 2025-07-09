import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import DarkModeToggle from "../ui/DarkModeToggle";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import styles from "./Header.module.css";

function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavClick = (hash: string) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/${hash}`, { replace: false });
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Alejandro BR</div>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick("#about"); }}>{t("aboutMeTitle")}</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick("#experience"); }}>{t("experience")}</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick("#projects"); }}>{t("projects")}</a>
          <a href="#education" onClick={(e) => { e.preventDefault(); handleNavClick("#education"); }}>{t("education")}</a>
          <a href="#technologies" onClick={(e) => { e.preventDefault(); handleNavClick("#technologies"); }}>{t("technologies")}</a>
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
