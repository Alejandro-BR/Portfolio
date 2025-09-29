import type { CertificationItem } from "../../interfaces/CertificationItem.type";
import styles from "./Certifications.module.css";

type CertificationsProps = {
  certifications: CertificationItem[];
};

function Certifications({ certifications }: CertificationsProps) {
  return (
    <section className={styles.certificationsContainer}>
      {certifications.map(({ id, title, period }) => (
        <div key={id} className={styles.certificationItem}>
          <h4 className={styles.certTitle}>{title}</h4>
          <p className={styles.certPeriod}>{period}</p>
        </div>
      ))}
    </section>
  );
}

export default Certifications;
