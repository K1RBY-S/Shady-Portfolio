// src/components/Contact.jsx
import React, { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const btn =
    "text-nowrap rounded-lg border border-yellow-500 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-yellow-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-500";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('Shadical@ymail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      window.prompt('Copy email address:', 'Shadical@ymail.com');
    }
  };

  return (
    <div id="contact" className="flex min-h-[70vh] min-w-full items-center justify-center">
      <div className="flex flex-col items-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl text-white">Let&apos;s Connect!</h1>
        <p className="text-xl text-white text-center">
          Feel free to get in touch or to reach out for collaboration opportunities.
        </p>

        <div className="flex gap-3 flex-wrap justify-center">
          {/* Same style as your original button */}
          <a
            href="mailto:Shadical@ymail.com?subject=Let%27s%20connect&body=Hi%20Shady%2C%0A%0A"
            className={btn}
          >
            Email Me
          </a>

          {/* Copy email — identical styling */}
          <button onClick={copyEmail} className={btn} aria-label="Copy email address">
            {copied ? 'Copied!' : 'Copy Email'}
          </button>
        </div>
      </div>
    </div>
  );
}
