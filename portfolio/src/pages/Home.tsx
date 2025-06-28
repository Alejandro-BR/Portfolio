import AboutMe from "../components/layouts/AboutMe";
import Experience from "../components/layouts/Experience";
import Projects from "../components/layouts/Projects";

function Home() {

  return (
    <div className="flex flex-col gap-8 pt-8">
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  );
}

export default Home;
