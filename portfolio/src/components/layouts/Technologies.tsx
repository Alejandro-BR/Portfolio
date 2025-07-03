import { useTranslation } from "react-i18next";
import styles from "./Technologies.module.css";

function Technologies() {
  const { t } = useTranslation();

  const backendTechs = [
    { name: ".Net", icon: "/svg/tech/dotnet.svg" },
    { name: "C#", icon: "/svg/tech/csharp.svg" },
    { name: "Java", icon: "/svg/tech/java.svg" },
    { name: "Spring Boot", icon: "/svg/tech/springboot.svg" },
    { name: "MySQL", icon: "/svg/tech/mysql.svg" },
    { name: "SQLite", icon: "/svg/tech/sqlite.svg" },
  ];

  const frontendTechs = [
    { name: "React", icon: "/svg/tech/react.svg" },
    { name: "Angular", icon: "/svg/tech/angular.svg" },
    { name: "TypeScript", icon: "/svg/tech/typescript.svg" },
    { name: "JavaScript", icon: "/svg/tech/javascript.svg" },
    { name: "Tailwind CSS", icon: "/svg/tech/tailwindcss.svg" },
    { name: "CSS", icon: "/svg/tech/css.svg" },
    { name: "HTML5", icon: "/svg/tech/html5.svg" },
    { name: "Effector", icon: "/svg/tech/effector.svg" },
  ];

  const otherTechs = [
    { name: "Docker", icon: "/svg/tech/docker.svg" },
    { name: "AWS", icon: "/svg/tech/aws.svg" },
    { name: "Git", icon: "/svg/tech/git.svg" },
    { name: "Figma", icon: "/svg/tech/figma.svg" },
    { name: "Visual Studio Code", icon: "/svg/tech/vscode.svg" },
    { name: "Visual Studio", icon: "/svg/tech/visualstudio.svg" },
    { name: "Jira", icon: "/svg/tech/jira.svg" },
    { name: "Postman", icon: "/svg/tech/postman.svg" },
    { name: "Arduino", icon: "/svg/tech/arduino.svg" },
    { name: "Linux", icon: "/svg/tech/linux.svg" },
  ];

  const renderTechList = (techList: typeof backendTechs) =>
    techList.map((tech, i) => (
      <img
        key={i}
        src={tech.icon}
        alt={tech.name}
        title={tech.name}
        className={styles.techIcon}
      />
    ));

  return (
    <section id="technologies">
      <div className="flex items-center gap-2 mb-4">
        <img
          src="/svg/extension.svg"
          alt="Technologies icon"
          className="w-[1.8rem] h-[1.8rem]"
        />
        <h2 className={styles.title}>{t("technologies")}</h2>
      </div>

      <div className={styles.techGrid}>
        {/* Backend */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src="/svg/dns.svg" alt="Backend icon" className={styles.icon} />
            <h3 className={styles.subTitle}>Backend</h3>
          </div>
          <div className={styles.techList}>{renderTechList(backendTechs)}</div>
        </div>

        {/* Frontend */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src="/svg/language.svg" alt="Frontend icon" className={styles.icon} />
            <h3 className={styles.subTitle}>Frontend</h3>
          </div>
          <div className={styles.techList}>{renderTechList(frontendTechs)}</div>
        </div>

        {/* Others */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src="/svg/code.svg" alt="Other icon" className={styles.icon} />
            <h3 className={styles.subTitle}>{t("others")}</h3>
          </div>
          <div className={styles.techList}>{renderTechList(otherTechs)}</div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
