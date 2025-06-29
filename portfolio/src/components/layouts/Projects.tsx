import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";
import ProjectCard from "../ui/ProjectCard";
import type { ProjectCardInterface } from "../../interfaces/ProjectCard.interface";

const Projects = () => {
  const { t } = useTranslation();

  const projectList: ProjectCardInterface[] = [
    {
      title: "The Enigma Casino",
      description: t("theEnigmaCasinoDescription"),
      images: [
        "/img/landing.png",
        "/img/home.png",
        "/img/ruleta.png",
        "/img/poker.png",
        "/img/blackjack.png",
      ],
      techs: [
        { name: ".Net", icon: "/svg/tech/dotnet.svg" },
        { name: "C#", icon: "/svg/tech/csharp.svg" },
        { name: "React", icon: "/svg/tech/react.svg" },
        { name: "TypeScript", icon: "/svg/tech/typescript.svg" },
        { name: "Tailwind CSS", icon: "/svg/tech/tailwindcss.svg" },
        { name: "Effector", icon: "/svg/tech/effector.svg" },
        { name: "MySQL", icon: "/svg/tech/mysql.svg" },
        { name: "AWS", icon: "/svg/tech/aws.svg" },
      ],
      links: {
        github: "https://github.com/The-Enigma-Casino/The-Enigma-Casino",
        demo: "https://the-enigma-casino.vercel.app/landing",
      },
    },
    {
      title: "AutoNext-Code",
      description:
        t("autoNextCodeDescription"),
      images: ["/img/loginAutoNext.png", "/img/reservationsAutoNext.png", "/img/dashboardAutoNext.png", "/img/historyAutoNext.png"],
      techs: [
        { name: "Spring Boot", icon: "/svg/tech/springboot.svg" },
        { name: "Java", icon: "/svg/tech/java.svg" },
        { name: "Angular 19", icon: "/svg/tech/angular.svg" },
        { name: "Tailwind CSS", icon: "/svg/tech/tailwindcss.svg" },
        { name: "MySQL", icon: "/svg/tech/mysql.svg" },
        { name: "Docker", icon: "/svg/tech/docker.svg" },
        { name: "AWS", icon: "/svg/tech/aws.svg" },
      ],
      links: {},
    },
    {
      title: "VhyperGames",
      description: t("vhyperGamesDescription"),
      images: [
        "/img/homeVhyperGames.png",
        "/img/catalogVhyperGames.png",
        "/img/cartVhyperGames.png",
        "/img/productsVhyperGames.png",
      ],
      techs: [
        { name: ".Net", icon: "/svg/tech/dotnet.svg" },
        { name: "C#", icon: "/svg/tech/csharp.svg" },
        { name: "React", icon: "/svg/tech/react.svg" },
        { name: "JavaScript", icon: "/svg/tech/javascript.svg" },
        { name: "CSS", icon: "/svg/tech/css.svg" },
        { name: "MySQL", icon: "/svg/tech/mysql.svg" },
      ],
      links: {
        github: "https://github.com/VhyperGames/VhyperGames",
        demo: "https://vhyper-games.vercel.app/",
      },
    },
        {
      title: "Webpify-cli",
      description: t("webpifyDescription"),
      images: [
        "/img/cmd1.png",
        "/img/cmd2.png",
        "/img/npm.png",
      ],
      techs: [
        { name: "JavaScript", icon: "/svg/tech/javascript.svg" },
        { name: "Node.js", icon: "/svg/tech/nodejs.svg" },
      ],
      links: {
        github: "https://github.com/Alejandro-BR/Webpify-cli",
        demo: "https://www.npmjs.com/package/webpify-cli",
      },
    },
  ];

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <img
          src="/svg/folder_code.svg"
          alt="Folder icon"
          className="w-[1.8rem] h-[1.8rem]"
        />
        <h2 className={styles.title}>{t("projects")}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
