import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./EmailActions.module.css";

const EmailActions = () => {
  const { t } = useTranslation();
  const [, setCopied] = useState(false);
  const email = "barrionuevorosadoalejandro@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success(t("copied"), {
      style: {
        backgroundColor: "var(--color-primary)",
        color: "#fff",
        borderRadius: "8px",
        padding: "1rem",
        fontWeight: 600,
      },
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.emailSection}>
      <div className={styles.emailWrapper}>
        <div className={styles.emailDisplay}>{email}</div>
        <div className={styles.emailButtons}>
          <a
            href={`mailto:${email}`}
            className={styles.emailBtn}
            title={t("sendEmail")}
          >
            <img src="/svg/email.svg" alt="Send Email" />
          </a>
          <button
            onClick={handleCopy}
            className={styles.emailBtn}
            title={t("copyEmail")}
          >
            <img src="/svg/copy.svg" alt="Copy Email" />
          </button>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick
        theme="colored"
      />
    </div>
  );
};

export default EmailActions;
