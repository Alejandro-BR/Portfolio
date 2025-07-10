import { useNavigate, useParams } from "react-router-dom";
import { useProjectList } from "../data/ProjectData";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslation } from "react-i18next";
import styles from "./ProjectDetail.module.css";
import WebpifyInstructions from "../components/ui/WebpifyInstructions";

const ProjectDetail = () => {
  const { slug } = useParams();
  const projectList = useProjectList();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const project = projectList.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!project) {
      navigate("/error", { replace: true });
    }
  }, [project, navigate]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  if (!project) return null;
  return (
    <section className="flex flex-col gap-8">
      <h1 className={styles.title}>{project.title}</h1>
      {project.images && project.images.length > 0 && (
        <>
          <div className="overflow-hidden rounded-xl w-full" ref={emblaRef}>
            <div className="flex">
              {project.images.map((img, idx) => (
                <div
                  className="min-w-full flex justify-center items-center"
                  key={idx}
                >
                  <img
                    src={img}
                    alt={`project-screenshot-${idx}`}
                    className="max-w-full h-auto object-contain rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3">
            {project.images.map((_, i) => (
              <button
                key={i}
                title={t("scrollToImage")}
                onClick={() => scrollTo(i)}
                className={`w-5 h-5 rounded-full transition-colors duration-200 ${
                  i === selectedIndex ? "bg-primary" : "bg-gray-400"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}

      <p className="text-lg">{project.description}</p>

      {project.links && Object.keys(project.links).length > 0 && (
        <div className="flex gap-4 flex-wrap items-center justify-center md:justify-start">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              <img src="/svg/github.svg" alt="GitHub" />
              GitHub
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              <img src="/svg/captive_portal.svg" alt="Demo" />
              Demo
            </a>
          )}
          {project.links.npm && (
            <a
              href={project.links.npm}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                role="img"
                aria-labelledby="a7b9p639wwa0y0d4q89w9mxjpw4r29pw"
              >
                <title id="a7b9p639wwa0y0d4q89w9mxjpw4r29pw">Npm</title>
                <path
                  d="M 0 0 L 0 16 L 16 16 L 16 0 L 0 0 z M 3 3 L 13 3 L 13 13 L 11 13 L 11 5 L 8 5 L 8 13 L 3 13 L 3 3 z "
                  fill="currentColor"
                ></path>
              </svg>
              Npm
            </a>
          )}
        </div>
      )}

      {project.techs && project.techs.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img
              src={"/svg/extension.svg"}
              alt="Tech"
              className="w-[1.8rem] h-[1.8rem]"
            />
            <h2 className={styles.subtitle}>{t("technologies")}</h2>
          </div>

          <div className={`${styles.techCard} ${styles.techContainer}`}>
            {project.techs.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center text-center justify-center gap-1 px-3 py-1"
                title={tech.name}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8 md:w-6 md:h-6 object-contain"
                />
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.features && project.features.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img
              src={"/svg/list_alt.svg"}
              alt="List"
              className="w-[1.8rem] h-[1.8rem]"
            />
            <h2 className={styles.subtitle}> {t("features")}</h2>
          </div>
          <ul className="list-disc list-inside space-y-3">
            {project.features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>
        </div>
      )}

      {project.extraInfo && <p className="text-base">{project.extraInfo}</p>}

      {project.slug?.includes("webpify") && <WebpifyInstructions />}
    </section>
  );
};

export default ProjectDetail;
