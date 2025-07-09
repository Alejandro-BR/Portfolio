import { useEffect } from "react";
import AboutMe from "../components/layouts/AboutMe";
import Education from "../components/layouts/Education";
import Experience from "../components/layouts/Experience";
import Projects from "../components/layouts/Projects";
import Technologies from "../components/layouts/Technologies";

function Home() {

  useEffect(() => {
  if (location.hash) {
    requestAnimationFrame(() => {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}, [location]);


  return (
    <div className="flex flex-col gap-8 pt-8">
      <AboutMe />
      <Experience />
      <Projects />
      <Education />
      <Technologies />
    </div>
  );
}

export default Home;
