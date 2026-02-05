import React from 'react'
import { motion } from 'framer-motion'

// PDFs in src/assets
import googleDA from '../assets/GoogleDataAnalytics.pdf'
import courseraCert from '../assets/Coursera-Cert.pdf'

// Report PDF
import healthReport from '../assets/health-report.pdf'

// Screenshots of Health project in src/assets
import bmiInsightImg from '../assets/health-bmi-insight.png'
import dataCleaningImg from '../assets/health-data-cleaning.png'
import logRegResultsImg from '../assets/health-logreg-resluts.png'
import modelComparisonImg from '../assets/health-model-comparison.png'

import reportCover from '../assets/health-report-cover.png'

const Projects = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  // Certificates data
  const certificates = {
    title: 'Certificates',
    desc:
      'Professional credentials demonstrating foundational analytical skills and applied data-driven decision-making frameworks to real-world business case studies while strengthened understanding of data ethics, visualization principles and analytical storytelling to support business strategies.',
    tag: 'Credentials',
    items: [
      {
        name: 'Google Data Analytics Certificate',
        file: googleDA,
        blurb:
          'Covers spreadsheets, SQL, Python, Tableau, and the full analytics workflow.'
      },
      {
        name: 'Coursera Certificate',
        file: courseraCert,
        blurb: '8-course sequence with applied projects in data analysis and reporting.'
      }
    ]
  }

  // Strava heatmap URL (hosted on a separate repo)
  const heatmapUrl =
    'https://k1rby-s.github.io/strava-heatmap-postman-visualization/heatmap.html'

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
        {/* =========================
            1) HEALTH PROJECT (TOP)
           ========================= */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-lg"
        >
          <div className="mb-3 inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs tracking-wide text-white/70">
            Machine Learning • EDA
          </div>

          <h3 className="text-2xl font-semibold text-white">
            Health & Lifestyle Classification Analysis
          </h3>

          <p className="mt-2 text-md leading-6 text-white/80">
            Explored whether lifestyle behaviors (fast-food frequency, calories, physical activity,
            sleep, and energy levels) can be used to classify individual health outcomes.
          </p>

          <p className="mt-2 text-md leading-6 text-white/80">
            Compared Logistic Regression, Decision Tree, and Random Forest models. Tree-based models
            overfit (perfect training accuracy) while Logistic Regression generalized best. ROC-AUC
            near 0.5 suggested limited class separability driven by data overlap.
          </p>

          {/* Screenshots (ordered) */}
<div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
  {/* Top Left: Data Cleaning */}
  <div className="rounded-xl border border-white/10 bg-black/30 overflow-hidden">
    <img
      src={dataCleaningImg}
      alt="Data cleaning and target creation"
      className="w-full h-auto"
      loading="lazy"
    />
    <p className="p-3 text-xs text-white/70">
      Data cleaning, encoding, and BMI target creation.
    </p>
  </div>

{/* Bottom Left: Logistic Regression */}
  <div className="rounded-xl border border-white/10 bg-black/30 overflow-hidden">
    <img
      src={logRegResultsImg}
      alt="Logistic Regression results"
      className="w-full h-auto"
      loading="lazy"
    />
    <p className="p-3 text-xs text-white/70">
      Logistic Regression results (test set).
    </p>
  </div>

  {/* Top Right: Model Comparison */}
  <div className="rounded-xl border border-white/10 bg-black/30 overflow-hidden">
    <img
      src={modelComparisonImg}
      alt="Model performance comparison"
      className="w-full h-auto"
      loading="lazy"
    />
    <p className="p-3 text-xs text-white/70">
      Model comparison (Train/Test Accuracy + ROC-AUC).
    </p>
  </div>


  {/* Bottom Right: Average BMI */}
  <div className="rounded-xl border border-white/10 bg-black/30 overflow-hidden">
    <img
      src={bmiInsightImg}
      alt="Average BMI by fast-food frequency"
      className="w-full h-auto"
      loading="lazy"
    />
    <p className="p-3 text-xs text-white/70">
      EDA: Average BMI by fast-food frequency.
    </p>
  </div>
</div>
{/* Report Preview */}
<div className="relative mt-6 overflow-hidden rounded-xl border border-white/10 bg-black/30 h-56 md:h-64">
  <img
    src={reportCover}
    alt="Report cover preview"
    className="h-full w-full object-cover object-top"
    loading="lazy"
  />

  <div className="absolute left-0 right-0 top-0 bg-black/60 backdrop-blur-sm px-3 py-2">
    <p className="text-xs text-white/90">Full write-up</p>
  </div>
</div>

{/* Report Buttons */}
<div className="mt-4 flex flex-wrap gap-3">
  <a
    href={healthReport}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-xl bg-white/90 px-4 py-2 text-sm font-medium text-black transition hover:bg-white"
  >
    Read Report (PDF)
  </a>

  <a
    href={healthReport}
    download
    className="rounded-xl border border-white/30 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
  >
    Download PDF
  </a>
</div>

        </motion.div>

        {/* =========================
            2) HEATMAP PROJECT (MIDDLE)
           ========================= */}
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

          <h3 className="text-2xl font-semibold text-white">
            Interactive Strava API Histogram
          </h3>

          <p className="mt-2 text-md leading-6 text-white/80">
            Visualization using Strava API to render a custom histogram for runs, bike rides, and
            walks. The data in this visualization shows an increase in workout duration in months
            10–11 but also consistent training frequency across months, suggesting a structured
            routine.
          </p>

          <p className="mt-2 text-md leading-6 text-white/80">
            Operated Strava API with Postman to get access to workout activity records, including
            run, bike, and walk metrics. Managed authentication/refresh tokens and processed raw
            JSON data into a structured dataset for analysis. Then I built an interactive histogram
            visualization showcasing trend analysis of elapsed time for workout by date.
          </p>

          {/* iframe wrapper */}
          <div className="mt-5 w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
            <iframe
              src={heatmapUrl}
              title="Strava Heatmap"
              className="w-full h-[500px] border-0 rounded-xl"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
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

        {/* =========================
            3) CERTIFICATES (BOTTOM)
           ========================= */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-lg"
        >
          <div className="mb-3 inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs tracking-wide text-white/70">
            {certificates.tag}
          </div>

          <h3 className="text-2xl font-semibold text-white">{certificates.title}</h3>

          <p className="mt-2 text-sm leading-6 text-white/80">{certificates.desc}</p>

          <div className="mt-6 space-y-5">
            {certificates.items.map((c) => (
              <div
                key={c.name}
                className="rounded-xl border border-white/10 bg-black/20 p-4"
              >
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
      </div>
    </div>
  )
}

export default Projects
