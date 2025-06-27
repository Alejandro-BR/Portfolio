import type { ExperienceItem } from "../../interfaces/ExperienceItem.type";
import styles from "./ExperienceTimeline.module.css";

type ExperienceTimelineProps = {
  experiences: ExperienceItem[];
};

export default function ExperienceTimeline({
  experiences,
}: ExperienceTimelineProps) {
  return (
    <div className="relative pl-10">
      <div
        className="absolute left-4 top-0 bottom-0 w-1 rounded"
        style={{
          background: "linear-gradient(to bottom, #3B82F6, #8B5CF6)",
        }}
      />

      {experiences.map(({ id, title, company, period, description }) => (
        <div key={id} className="mb-8 relative pl-8">
          <span
            className="absolute -left-8 top-7 w-5 h-5 rounded-full"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
            }}
          ></span>

          <p className={styles.period}>{period}</p>
          <h3 className={styles.title}>
            {title}{" "}
            {company && <span className={styles.company}> @ {company}</span>}
          </h3>
          <ul className={styles.description}>
            {description.map((point, index) => (
              <li key={index}>
                <span className={styles.bullet}>•</span> {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
