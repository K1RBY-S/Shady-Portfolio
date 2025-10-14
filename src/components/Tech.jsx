import React from 'react'
import { motion } from 'framer-motion'
import { BiLogoPython, BiLogoJavascript, BiLogoPostgresql } from 'react-icons/bi'
import { FaReact, FaGithub } from 'react-icons/fa'
import { SiTailwindcss, SiJira } from 'react-icons/si'
import excelLogo from '../assets/excel_logo.jpg'
import tableauLogo from '../assets/tableau_logo.png'

const Tech = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 }
  }

  const techs = [
    { label: 'Python', icon: <BiLogoPython className="text-orange-200" /> },
    { label: 'JavaScript', icon: <BiLogoJavascript className="text-yellow-400" /> },
    { label: 'SQL', icon: <BiLogoPostgresql className="text-blue-500" /> },
    { label: 'React', icon: <FaReact className="text-cyan-300" /> },
    { label: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-300" /> },
    { label: 'GitHub', icon: <FaGithub className="text-purple-500" /> },
    { label: 'Jira', icon: <SiJira className="text-blue-400" /> },
  ]

  return (
    <div id="Tech" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 md:gap-32">
      <motion.h1
        variants={item}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl font-semibold text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-10 p-5"
      >
       
        {techs.map((t) => (
          <motion.div
            key={t.label}
            variants={item}
            className="flex flex-col items-center gap-2"
          >
            <div className="cursor-pointer transition-all duration-300 hover:-translate-y-5">
            
              <div className="text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px]">
                {t.icon}
              </div>
            </div>
            <span className="text-white text-lg font-medium">{t.label}</span>
          </motion.div>
        ))}
        {/* Custom images for Excel and Tableau */} 
        <motion.div variants={item} className="flex flex-col items-center gap-2">
          <img
            src={excelLogo}
            alt="Excel"
            className="cursor-pointer w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] object-contain transition-all duration-300 hover:-translate-y-5"
          />
          <span className="text-white text-lg font-medium">Excel</span>
        </motion.div>

        <motion.div variants={item} className="flex flex-col items-center gap-2">
          <img
            src={tableauLogo}
            alt="Tableau"
            className="cursor-pointer w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] object-contain transition-all duration-300 hover:-translate-y-5"
          />
          <span className="text-white text-lg font-medium">Tableau</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Tech
