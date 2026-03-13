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
          <li>Utilized SQL (e.g. JOINs, CTEs, aggregations, filtering) to build queries supporting data extraction and 
              transformation within ETL workflows.</li>
          <li>Leveraged Excel (e.g. XLOOKUP, Pivot Tables, conditional formatting) to identify trends and validated historical 
              datasets with 10,000+ records for trend forecasting.</li>
          <li>Collaborated on a Python-based automation process to clean and transform data.</li>
          <li>Documented the workflow of automation projects for technical and non-technical stakeholders. </li>
          <li>Built cross-functional relationships and showed initiative in understanding project requirements, scheduling 
              meetings and communicating findings to management. </li>
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
          <li>Built long-term customer relationships contributing to repeated business. </li>
        </ul>
      </motion.div>
      {/* NARC */}
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 text-white/85"
      >
        <p className="font-bold text-white">
          <span className="font-extrabold text-white">Founder - NotaRunClub</span> - (July 2024 - November 2024)
        </p>

        <ul className="mt-3 list-disc pl-5 space-y-2">
          <li>Organized weekly community runs and lifts that brought together participants from across Southern California.</li>
          <li>Promoted upcoming events through digital fliers and outreach to attract a more diverse group of participants. </li>
          <li>Partnered with a local gym contributing to increased gym membership signups and club participation.</li>
        </ul>
      </motion.div>
    </div>
  )
}
