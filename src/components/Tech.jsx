import React from 'react'
import { BiLogoPython, BiLogoJavascript, BiLogoPostgresql } from 'react-icons/bi'
import excelLogo from '../assets/excel_logo.jpg'
import tableauLogo from '../assets/tableau_logo.png'
import { motion } from 'framer-motion'

const Tech = () => {
  
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }
  
  return (
    <div id="Tech" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 md:gap-32">
      
      <motion.h1 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl font-semibold text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        
        <div className="flex flex-col items-center gap-2">
          <BiLogoPython className="cursor-pointer text-[80px] text-orange-200 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px] lg:text-[140px]" />
          <span className="text-white text-lg font-medium">Python</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px] lg:text-[140px]" />
          <span className="text-white text-lg font-medium">JavaScript</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <BiLogoPostgresql className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px] lg:text-[140px]" />
          <span className="text-white text-lg font-medium">SQL</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <img 
            src={excelLogo} 
            alt="Excel" 
            className="cursor-pointer w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] object-contain transition-all duration-300 hover:-translate-y-5" 
          />
          <span className="text-white text-lg font-medium">Excel</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <img 
            src={tableauLogo} 
            alt="Tableau" 
            className="cursor-pointer w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] object-contain transition-all duration-300 hover:-translate-y-5" 
          />
          <span className="text-white text-lg font-medium">Tableau</span>
        </div>
      </div>
    </div>
  )
}

export default Tech