import styles from "./Experience.module.css";

import { useTranslation } from "react-i18next";
import type { ExperienceItem } from "../../interfaces/ExperienceItem.type";
import ExperienceTimeline from "../ui/ExperienceTimeline";

function Experience() {
  const { t } = useTranslation();

  const experiences = t("experienceItems", {
    returnObjects: true,
  }) as ExperienceItem[];

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <img
          src={"/svg/work.svg"}
          alt="Work icon"
          className="w-[1.8rem] h-[1.8rem]"
        />
        <h2 className={styles.title}> {t("experience")}</h2>
      </div>
      <ExperienceTimeline experiences={experiences} />
    </section>
  );
}

export default Experience;
