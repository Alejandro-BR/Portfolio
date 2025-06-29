import styles from "./ProjectCard.module.css";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslation } from "react-i18next";
import type { ProjectCardInterface } from "../../interfaces/ProjectCard.interface";

const ProjectCard: React.FC<ProjectCardInterface> = ({
  title,
  description,
  images,
  techs,
  links,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

    const { t } = useTranslation();

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index);
  }, [emblaApi]);

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
    <div className="bg-[var(--color-surface)] p-4 rounded-2xl shadow-md h-full flex flex-col gap-4">
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
        <div className="flex justify-center gap-2 mt-2">
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
            <img src="/svg/tech/npm.svg" alt="NPM" />
            NPM
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
