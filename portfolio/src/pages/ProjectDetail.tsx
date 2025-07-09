import { useNavigate, useParams } from "react-router-dom";
import { useProjectList } from "../data/ProjectData";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslation } from "react-i18next";

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
    <section className="max-w-5xl mx-auto p-6 flex flex-col gap-8">
      <h1 className="text-4xl font-bold text-center md:text-left">
        {project.title}
      </h1>

      {project.images && project.images.length > 0 && (
        <>
          <div
            className="overflow-hidden rounded-xl w-full"
            ref={emblaRef}
          >
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

      {project.features && project.features.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold">{t("features")}</h2>
          <ul className="list-disc list-inside space-y-2">
            {project.features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>
        </>
      )}

      {project.extraInfo && (
        <p className="text-base">{project.extraInfo}</p>
      )}
    </section>
  );
};

export default ProjectDetail;
