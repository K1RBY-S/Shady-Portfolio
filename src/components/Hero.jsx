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
        
        className="text-2xl font-semibold text-white md:text-4xl">Data Analyst</motion.h3>
        
        <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-xl text-white md:text-2xl text-pretty">
          Aspiring Data Scientist passionate about transforming data into insights. Skilled in SQL, Python, and analytical frameworks, with internship experience at Kaiser Permanente. I thrive in challenging environments, excel at collaborative problem-solving, and bring innovative thinking to improve reporting processes and exceed performance goals.
        </motion.p>
      </div>
    </section>
  );
}