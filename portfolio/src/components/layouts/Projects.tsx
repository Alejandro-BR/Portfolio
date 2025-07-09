import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";
import ProjectCard from "../ui/ProjectCard";
import { useProjectList } from "../../data/ProjectData";


const Projects = () => {
  const { t } = useTranslation();
  const projectList = useProjectList();

  return (
    <section id="projects">
      <div className="flex items-center gap-2 mb-4">
        <img
          src="/svg/folder_code.svg"
          alt="Folder icon"
          className="w-[1.8rem] h-[1.8rem]"
        />
        <h2 className={styles.title}>{t("projects")}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectList.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
