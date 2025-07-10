import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./WebpifyInstructions.module.css";

const WebpifyInstructions = () => {
  const { t } = useTranslation();
  const commandInstall: string = "npm i -g webpify-cli";
  const commandRun: string = "webpify";
  const [, setCopied] = useState(false);

  const handleCopy = (command: string) => {
    navigator.clipboard.writeText(command);
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
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <img
            src={"/svg/info.svg"}
            alt="List"
            className="w-[1.8rem] h-[1.8rem]"
          />
          <h2 className={styles.title}> {t("instructions")}</h2>
        </div>

        <div className={styles.instructionCard}>
          <p className={styles.helperText}>{t("webpifyCommandHelper")}</p>
          <div className={styles.commandWrapper}>
            <code className={styles.command}>{commandInstall}</code>
            <button
              onClick={() => handleCopy(commandInstall)}
              className={styles.copyBtn}
              title={t("copyCommand")}
            >
              <img src="/svg/copy2.svg" alt="Copy command" />
            </button>
          </div>

          <p className={styles.helperText}>
            {t(
              "webpifyRunHelper",
              "To run Webpify, use the following command:"
            )}
          </p>
          <div className={styles.commandWrapper}>
            <code className={styles.command}>webpify</code>
            <button
              onClick={() => handleCopy(commandRun)}
              className={styles.copyBtn}
              title={t("copyCommand")}
            >
              <img src="/svg/copy2.svg" alt="Copy run command" />
            </button>
          </div>

          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            closeOnClick
            theme="colored"
          />
        </div>
      </div>
    </div>
  );
};

export default WebpifyInstructions;
