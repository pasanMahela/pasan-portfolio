import "./app.scss";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Education">
        <Parallax type="education" />
      </section>
      <section>
        <Education />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Projects">
        <Parallax type="portfolio" />
      </section>
      <Projects />
      <section id="Contact">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
