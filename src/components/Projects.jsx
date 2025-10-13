import React from 'react'
import { motion } from 'framer-motion'

// ⬇️ Import your PDFs from src/assets
// (Adjust the relative paths to match your folder structure)
import googleDA from '../assets/GoogleDataAnalytics.pdf'
import courseraCert from '../assets/Coursera-Cert.pdf' // consider renaming to coursera-cert.pdf

const Projects = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const projects = [
    {
      title: 'Google Data Analytics Certificate',
      desc: 'Professional certificate covering spreadsheets, SQL, R, Tableau, and full analytics workflow.',
      file: googleDA,
      tag: 'Certificate'
    },
    {
      title: 'Coursera Certificate',
      desc: '8-course sequence with hands-on, practice-based assessments in data analytics.',
      file: courseraCert,
      tag: 'Certificate'
    }
  ]

  return (
    <div
      id="Projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 md:gap-24 px-4"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl font-semibold text-white md:text-6xl"
      >
        Projects
      </motion.h1>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-lg"
          >
            <div className="mb-3 inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs tracking-wide text-white/70">
              {p.tag}
            </div>
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/80">{p.desc}</p>

            <div className="mt-5 flex gap-3">
              <a
                href={p.file}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white/90 px-4 py-2 text-sm font-medium text-black transition hover:bg-white"
              >
                View PDF
              </a>
              <a
                href={p.file}
                download
                className="rounded-xl border border-white/30 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
              >
                Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
