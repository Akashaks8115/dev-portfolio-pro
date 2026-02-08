import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import MouseSpotlight from "./components/MouseSpotlight";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealedElements = document.querySelectorAll(".reveal-on-scroll");
    revealedElements.forEach((el) => observer.observe(el));

    return () => revealedElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <main className="min-h-screen selection:bg-primary-500/30 relative">
      <MouseSpotlight />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
