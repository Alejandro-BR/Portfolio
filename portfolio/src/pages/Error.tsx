import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Error() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="mb-6 animate-bounce motion-reduce:animate-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 h-24 text-secondary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 10h.01M15 10h.01M12 15c1.5 0 2.25-1 3-2m3-2.5A7.5 7.5 0 0012 3a7.5 7.5 0 00-6 12.5V21l3-1.5 3 1.5 3-1.5 3 1.5v-5.5A7.48 7.48 0 0021 10.5z"
          />
        </svg>
      </div>

      <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl font-medium mb-6">{t("error")}</p>

      <button
        onClick={handleGoBack}
        className="inline-block px-6 py-3 bg-secondary text-white rounded-2xl shadow-md hover:bg-primary transition-colors duration-300"
      >
        {t("goBackHome")}
      </button>
    </div>
  );
}

export default Error;
