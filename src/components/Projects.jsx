import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }
  
  
  
  return (
    <div id="Projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 md:gap-32">
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl font-semibold text-white md:text-6xl">
          Projects
          </motion.h1>
      {/* Add your project items here */}
    </div>
  )
}

export default Projects