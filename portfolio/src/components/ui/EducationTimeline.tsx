import type { EducationItem } from "../../interfaces/EducationItem.type";
import styles from "./ExperienceTimeline.module.css";

type EducationTimelineProps = {
  education: EducationItem[];
};

export default function EducationTimeline({ education }: EducationTimelineProps) {
  return (
    <div className="relative pl-10">
      <div
        className="absolute left-4 top-0 bottom-0 w-1 rounded"
        style={{
          background: "linear-gradient(to bottom, #3B82F6, #8B5CF6)",
        }}
      />

      {education.map(({ id, title, school, period }) => (
        <div key={id} className="mb-8 relative pl-8">
          <span
            className="absolute -left-8 top-7 w-5 h-5 rounded-full"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
            }}
          ></span>

          <p className={styles.period}>{period}</p>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.company}>{school}</p>
        </div>
      ))}
    </div>
  );
}
