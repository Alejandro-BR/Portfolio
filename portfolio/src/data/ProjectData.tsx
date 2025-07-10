import { useTranslation } from "react-i18next";
import type { ProjectCardInterface } from "../interfaces/ProjectCard.interface";

export const useProjectList = (): ProjectCardInterface[] => {
  const { t } = useTranslation();

  return [
    {
      slug: "the-enigma-casino",
      title: "The Enigma Casino",
      description: t("theEnigmaCasinoDescription"),
      images: [
        "/img/landing.webp",
        "/img/home.webp",
        "/img/ruleta.webp",
        "/img/poker.webp",
        "/img/blackjack.webp",
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
      features: t("theEnigmaCasinoFeatures", {
        returnObjects: true,
      }) as string[],
    },
    {
      slug: "autonext-code",
      title: "AutoNext Code",
      description: t("autoNextCodeDescription"),
      images: [
        "/img/loginAutoNext.webp",
        "/img/reservationsAutoNext.webp",
        "/img/dashboardAutoNext.webp",
        "/img/historyAutoNext.webp",
      ],
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
      features: t("autoNextCodeFeatures", { returnObjects: true }) as string[],
    },
    {
      slug: "vhyper-games",
      title: "Vhyper Games",
      description: t("vhyperGamesDescription"),
      images: [
        "/img/homeVhyperGames.webp",
        "/img/catalogVhyperGames.webp",
        "/img/cartVhyperGames.webp",
        "/img/productsVhyperGames.webp",
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
      features: t("vhyperGamesFeatures", { returnObjects: true }) as string[],
    },
    {
      slug: "webpify",
      title: "Webpify",
      description: t("webpifyDescription"),
      images: [
        "/img/cmd1.webp",
        "/img/npm.webp",
      ],
      techs: [
        { name: "JavaScript", icon: "/svg/tech/javascript.svg" },
        { name: "Node.js", icon: "/svg/tech/nodejs.svg" },
      ],
      links: {
        github: "https://github.com/Alejandro-BR/Webpify-cli",
        npm: "https://www.npmjs.com/package/webpify-cli",
      },
      features: t("webpifyFeatures", { returnObjects: true }) as string[],
      // extraInfo: t("webpifyExtraInfo"),
    },
  ];
};
