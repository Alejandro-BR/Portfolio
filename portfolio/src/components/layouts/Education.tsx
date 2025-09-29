import { useTranslation } from "react-i18next";
import styles from "./Education.module.css";
import type { EducationItem } from "../../interfaces/EducationItem.type";
import EducationTimeline from "../ui/EducationTimeline";
import Certifications from "../ui/Certifications";
import type { CertificationItem } from "../../interfaces/CertificationItem.type";

function Education() {
  const { t } = useTranslation();

  const educationData: EducationItem[] = [
    {
      id: 1,
      title: t("specialistAIandBD"),
      school: "C.P.I.F.P. Alan Turing, PTA (Málaga)",
      period: "2025 – 2026 " + t("inProgress"),
    },
    {
      id: 2,
      title: t("technicalSuperiorWebDev"),
      school: "C.P.I.F.P. Alan Turing, PTA (Málaga)",
      period: "2023 – 2025",
    },
    {
      id: 3,
      title: t("technicalTelecomInstallations"),
      school: "C.P.I.F.P. Alan Turing, PTA (Málaga)",
      period: "2021 – 2023",
    },
  ];

  const myCertifications: CertificationItem[] = [
    {
      id: 1,
      title: "Cambridge English: B1 Preliminary",
      period: t("inProgress"),
    },
    {
      id: 2,
      title: "AWS Academy Cloud Foundations",
      period: t("february") + " 2024",
    },
  ];

  return (
    <section id="education">
      <div className="flex items-center gap-2 mb-4">
        <img
          src="/svg/school.svg"
          alt="Folder icon"
          className="w-[1.8rem] h-[1.8rem]"
        />
        <h2 className={styles.title}>{t("education")}</h2>
      </div>
      <EducationTimeline education={educationData} />
      <div className="flex items-center gap-2 mb-4">
        <img
          src="/svg/verified.svg"
          alt="Folder icon"
          className="w-[1.5rem] h-[1.5rem]"
        />
        <h3 className={styles.subTitle}>{t("certifications")}</h3>
      </div>
      <Certifications certifications={myCertifications} />
    </section>
  );
}

export default Education;
