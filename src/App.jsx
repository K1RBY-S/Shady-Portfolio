import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Graph from "./components/Graph";

const App = () => {
  return (
    <>
      <Graph />
      <main className="relative min-h-screen w-full bg-[transparent] text-white">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;