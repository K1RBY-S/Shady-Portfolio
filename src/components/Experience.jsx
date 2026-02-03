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

      {/* Kaiser Permanente */}
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 text-white/85"
      >
        <p className="font-bold text-white">
          <span className="font-extrabold text-white">Data Analyst Intern - Kaiser Permanente</span> - (July 2025 - September 2025)
        </p>

        <ul className="mt-3 list-disc pl-5 space-y-2">
          <li>Conducted data extraction, manipulation, and reporting using SQL (Oracle & Databricks) to create queries generate insights and improve data quality.</li>
          <li>Collaborated on a Python web-automation for logins to future Kaiser projects and documented end-to-end workflow for technical and non-technical users.</li>
          <li>Utilized Excel functions such as XLOOKUP to streamline validation and management of historical datasets and surface trends.</li>
          <li>Built cross-functional relationships and communicated progress, deadlines, and blockers to senior management.</li>
        </ul>
      </motion.div>

      {/* Val Surf */}
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 text-white/85"
      >
        <p className="font-bold text-white">
          <span className="font-extrabold text-white">Sales Associate - Val Surf</span> - (February 2024 - July 2025)
        </p>

        <ul className="mt-3 list-disc pl-5 space-y-2">
          <li>Advised customers on skate/surf/snow gear, matching specs and fit to rider experience.</li>
          <li>Processed POS transactions, returns, inventory checks and assisted with stockroom organization and daily merchandising resets.</li>
          <li>Created small product displays that highlighted seasonal promos and contributed to a lift in snow sales.</li>
          <li>Captured customer feedback and recurring issues, sharing notes with the team to improve sizing guidance and product recommendations.</li>
        </ul>
      </motion.div>
    </div>
  )
}
