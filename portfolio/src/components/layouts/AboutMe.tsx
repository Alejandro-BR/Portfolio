import { useTranslation } from "react-i18next";
import styles from "./AboutMe.module.css";
import EmailActions from "../ui/EmailActions";


const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutMe}>
      <div className={styles.containerPC}>
        <div className={styles.profileImage}>
          <img src="/img/myPhoto.webp" alt="Alejandro BR" />
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.profileText}>
            <h1 className={styles.name}>Alejandro</h1>
            <h1 className={styles.name}>Barrionuevo Rosado</h1>
            <p className={styles.info}>{t("aboutMe")}</p>
          </div>

          <div className={styles.contactSection}>
            <div className={styles.links}>
              <a
                href="https://github.com/Alejandro-BR"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <img src="/svg/github.svg" alt="GitHub" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/alejandro-barrionuevo-rosado/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <img src="/svg/linkedin.svg" alt="LinkedIn" />
                LinkedIn
              </a>
              <a
                href="/docs/Alejandro_Barrionuevo_Rosado_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <img src="/svg/contact_page.svg" alt="CV" />
                CV
              </a>
            </div>
            <EmailActions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
