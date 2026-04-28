import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Courses from "./sections/Courses";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Courses />
      <Experience />
      <Contact />
    </>
  );
}