// import { useTranslation } from "react-i18next";
import AboutMe from "../components/layouts/AboutMe";
import Experience from "../components/layouts/Experience";

function Home() {
  // const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8 pt-8">
      <AboutMe />
      <Experience />
    </div>
  );
}

export default Home;
