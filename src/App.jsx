import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Graph from "./components/Graph";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <Graph />
      <Navbar />

      {/* Add top padding to clear the fixed navbar (adjust 24→28/32 if your nav is taller) */}
      <main className="relative min-h-screen w-full bg-[transparent] text-white pt-24">
        <Hero />
        <Experience />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
