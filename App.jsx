import { main } from 'framer-motion/client'
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


const App = () => {
  return <>
    <main className="relative min-h-screen w-full bg-[#D3D3D3] text-white">
      <Navbar />
      <Hero />
      <Tech />
      <Projects />
      <Contact />
    </main>
  </>;
};

export default App;