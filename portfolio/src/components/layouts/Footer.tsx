import { useTranslation } from "react-i18next";
import GitHubProfile from "../ui/GitHubProfile";
import styles from "./Footer.module.css";

function Footer() {

  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section >
          <GitHubProfile username="Alejandro-BR" />
        </section>
        <section className={styles.footerNote}>
          <p>{t("thanks")}</p>
        </section>
        <section className={styles.socialIcons}>
          <a
            href="https://www.linkedin.com/in/alejandro-barrionuevo-rosado/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconButton}
            aria-label="LinkedIn"
          >
            <img src="/svg/linkedin-original.svg" alt="" />
            <span className={styles.iconLabel}>LinkedIn</span>
          </a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
