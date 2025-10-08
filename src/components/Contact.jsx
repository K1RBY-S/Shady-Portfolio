import React from 'react'

const Contact = () => {
  return (
    <div id="Contact" className="flex min-h-[70vh] min-w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl text-white">
          Let's Connect!
        </h1>
      
        <p className="text-xl text-white text-center">
          Feel free to reach out for collaborations or to get in touch.
        </p>

        <a 
          href="mailto:Shadical@ymail.com" 
          className="text-nowrap rounded-lg border border-yellow-500 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-yellow-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-500"
        >
          Contact Me
        </a>
      </div>
    </div>
  )
}

export default Contact