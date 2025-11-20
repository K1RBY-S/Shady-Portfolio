import React from 'react'
import { motion } from 'framer-motion'

// PDFs in src/assets
import googleDA from '../assets/GoogleDataAnalytics.pdf'
import courseraCert from '../assets/Coursera-Cert.pdf'

const Projects = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const certificates = {
    title: 'Certificates',
    desc:
      'Professional credentials demonstrating foundational analytics skills and hands-on, practice-based assessments.',
    tag: 'Credentials',
    items: [
      {
        name: 'Google Data Analytics Certificate',
        file: googleDA,
        blurb: 'Covers spreadsheets, SQL, R, Tableau, and the full analytics workflow.'
      },
      {
        name: 'Coursera Certificate',
        file: courseraCert,
        blurb: '8-course sequence with applied projects in data analysis and reporting.'
      }
    ]
  }

  const heatmapUrl =
    "https://k1rby-s.github.io/strava-heatmap-postman-visualization/heatmap.html"

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

      <div className="grid w-full max-w-6xl grid-cols-1 gap-6">
        
        {/* Certificates Card */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-lg"
        >
          <div className="mb-3 inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs tracking-wide text-white/70">
            {certificates.tag}
          </div>

          <h3 className="text-2xl font-semibold text-white">{certificates.title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/80">{certificates.desc}</p>

          <div className="mt-6 space-y-5">
            {certificates.items.map((c) => (
              <div key={c.name} className="rounded-xl border border-white/10 bg-black/20 p-4">
                <h4 className="text-lg font-medium text-white">{c.name}</h4>
                <p className="mt-1 text-sm text-white/75">{c.blurb}</p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={c.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white/90 px-4 py-2 text-sm font-medium text-black transition hover:bg-white"
                  >
                    View PDF
                  </a>
                  <a
                    href={c.file}
                    download
                    className="rounded-xl border border-white/30 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Heatmap Project Card */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-lg"
        >
          <div className="mb-3 inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs tracking-wide text-white/70">
            Data Visualization
          </div>

          <h3 className="text-2xl font-semibold text-white">Strava Activity Histogram</h3>
          <p className="mt-2 text-sm leading-6 text-white/80">
            Interactive Postman visualization using exported Strava data and Chart.js.
          </p>

          <div className="mt-5 w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
            <iframe
              src={heatmapUrl}
              title="Strava Heatmap"
              className="w-full h-[500px] border-0 rounded-xl"
            />
          </div>

          <div className="mt-4">
            <a
              href={heatmapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white/90 px-4 py-2 text-sm font-medium text-black transition hover:bg-white"
            >
              Open Fullscreen
            </a>
          </div>

        </motion.div>

      </div>
    </div>
  )
}

export default Projects
