// import { useTranslation } from "react-i18next";
import AboutMe from "../components/layouts/AboutMe";
import Experience from "../components/layouts/Experience";

function Home() {
  // const { t } = useTranslation();

  return (
    <div>
      <AboutMe />
      <Experience />
    </div>
  );
}

export default Home;
