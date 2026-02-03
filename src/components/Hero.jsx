import React from "react";
import heroImage from "../assets/DSC04262.JPG";
import{ motion } from "framer-motion";
// import Background from "./Background";
export default function Hero() {
  return (
    <section id="Home" className="px-16 flex flex-col min-h-screen w-full items-center justify-center gap-8 py-28 md:px-32">
      {/* <Background /> */}
      <img
        src={heroImage}
        alt="Shady Dajani"
        className="w-[300px] md:w-[350px] rounded-full object-cover aspect-square shadow-xl shadow-yellow-500 transition-all duration-300 brightness-90 contrast-115 saturate-100 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-600 hover:brightness-100 hover:contrast-100 hover:saturate-100"
      />
      <div className="z-1 flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
        <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-5xl font-bold text-white md:text-6xl">Shady Dajani</motion.h1>
        

        <motion.h3 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        
        className="text-2xl font-semibold text-white md:text-4xl">Analyst</motion.h3>
        
        <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-xl text-white md:text-2xl text-pretty">
           Analyst with four years of analytical experience and continually looking to advance my professional skills and career. I've had the opportunity to work for companies like Kaiser Permanente where I managed multiple projects utilizing softwares and tools like Python, SQL, Microsoft (Excel & Word) and more. I am adapt at developing cross-functional relationships with people in different departments while supporting project goals and objectives.
        </motion.p>
      </div>
    </section>
  );
}