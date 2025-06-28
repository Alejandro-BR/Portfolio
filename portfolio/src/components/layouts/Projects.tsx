// components/Projects.tsx
import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  const { t } = useTranslation();

  const projectList = [
    {
      title: "The Enigma Casino",
      description:
        t("theEnigmaCasinoDescription"),
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
        // { name: "CSS", icon: "/svg/tech/css.svg" },
        { name: "Effector", icon: "/svg/tech/effector.svg" },
        { name: "MySQL", icon: "/svg/tech/mysql.svg" },
        // { name: "SQLite", icon: "/svg/tech/sqlite.svg" },
        { name: "AWS", icon: "/svg/tech/aws.svg" },
      ],
      links: {
        github: "https://github.com/The-Enigma-Casino/The-Enigma-Casino",
        demo: "https://the-enigma-casino.vercel.app/landing",
      },
    },
    {
      title: "E-commerce App",
      description:
        "Aplicación de comercio electrónico con carrito, login y panel de administración.",
      images: ["/img/ecommerce1.png", "/img/ecommerce2.png"],
      techs: [
        { name: "Next.js", icon: "/svg/tech/nextjs.svg" },
        { name: "Tailwind CSS", icon: "/svg/tech/tailwindcss.svg" },
        { name: "MongoDB", icon: "/svg/tech/mongodb.svg" },
        { name: "Stripe", icon: "/svg/tech/stripe.svg" },
      ],
      links: {
        github: "https://github.com/tuusuario/ecommerce-app",
        demo: "https://ecommerce.vercel.app",
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
