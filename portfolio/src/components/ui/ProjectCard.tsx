import styles from "./ProjectCard.module.css";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslation } from "react-i18next";
import type { ProjectCardInterface } from "../../interfaces/ProjectCard.interface";
import { Link } from "react-router-dom";

const ProjectCard: React.FC<ProjectCardInterface> = ({
  title,
  description,
  images,
  techs,
  links,
  slug,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { t } = useTranslation();

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

  return (
    <div className="bg-[var(--color-surface)] p-4 rounded-2xl shadow-md h-full flex flex-col gap-5">
      <div>
        <div className="overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="flex">
            {images.map((img, idx) => (
              <div className="min-w-full" key={idx}>
                <img
                  src={img}
                  alt={`screenshot-${idx}`}
                  className="w-full aspect-video object-contain rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {images.length > 1 && (
          <div className="flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                title={t("scrollToImage")}
                key={i}
                onClick={() => scrollTo(i)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  i === selectedIndex ? "bg-primary" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm">{description}</p>

      <div className="flex flex-wrap gap-2 justify-center">
        {techs.map((tech, i) => (
          <img
            key={i}
            src={tech.icon}
            alt={tech.name}
            title={tech.name}
            className="w-7 h-7"
          />
        ))}
      </div>

      <div className="mt-auto flex gap-4 flex-wrap items-center justify-center">
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            <img src="/svg/github.svg" alt="GitHub" />
            GitHub
          </a>
        )}
        {links.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            <img src="/svg/captive_portal.svg" alt="Demo" />
            Demo
          </a>
        )}
        {links.npm && (
          <a
            href={links.npm}
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
      <div className="flex justify-end">
        <Link
          to={`/projects/${slug}`}
          title={t("viewDetails")}
          className="transition hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            width="32"
            height="32"
            fill="var(--color-primary)"
            className="transition-colors duration-200 hover:fill-[var(--color-secondary)]"
          >
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
