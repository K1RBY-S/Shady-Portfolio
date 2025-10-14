import React from 'react'
import { motion } from 'framer-motion'

export default function Experience() {
  const item = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }

  return (
    <div
      id="Experience"
      className="scroll-mt-28 flex min-h-screen w-full flex-col items-center justify-center gap-12 md:gap-20 px-4"
    >
      <motion.h1
        variants={item}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl font-semibold text-white md:text-6xl"
      >
        Experience
      </motion.h1>

      {/* placeholder content so you see something */}
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 text-white/85"
      >
        <p className="font-bold text-white">
  <span className="font-extrabold text-white">Data Analytics Intern - Kaiser Permanente</span> (July–September 2025)
</p>

        <ul className="mt-3 list-disc pl-5 space-y-2">
          <li>Validates data utilizing queries in SQL (Oracle and Databricks)</li>
            <li>Collaborated in web scraping data to create site automation and documented the process</li>
            <li>Manages and validates data in excel while making use of intermediate functions such as XLOOKUP</li>
            <li>Performs analysis, testing and interpretation of processes and data to provide insights to support Kaiser’s objectives</li>
            <li>Presented findings to senior management, influencing data-driven decisions</li>
        </ul>
      </motion.div>
    </div>
  )
}
