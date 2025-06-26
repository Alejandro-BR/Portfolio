import { useEffect } from "react";
import DarkModeToggle from "../ui/DarkModeToggle";
import styles from "./Header.module.css";
import LanguageSwitcher from "../ui/LanguageSwitcher";

function Header() {

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
        <DarkModeToggle />
        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default Header;
