import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiMenu, BiX } from "react-icons/bi";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  // ✅ define the click handler
  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    close(); // close mobile panel if open

    // wait a tick so the panel can close, then scroll
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      // keep the hash in the URL (optional)
      history.replaceState(null, "", `#${id}`);
    });
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-700 bg-black/70 text-white backdrop-blur-md">
      {/* bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:justify-evenly">
        <a
          href="#Home"
          onClick={handleNavClick("Home")}
          className="bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent opacity-80 text-2xl md:text-3xl font-semibold transition-opacity duration-300 hover:opacity-100"
        >
          Shady Dajani
        </a>

        {/* desktop nav */}
        <ul className="hidden md:flex gap-10">
          <li><a href="#Home" onClick={handleNavClick("Home")} className="opacity-70 transition-opacity duration-300 hover:opacity-100">Home</a></li>
          <li><a href="#Experience" onClick={handleNavClick("Experience")} className="opacity-70 transition-opacity duration-300 hover:opacity-100">Experience</a></li>
          <li><a href="#Tech" onClick={handleNavClick("Tech")} className="opacity-70 transition-opacity duration-300 hover:opacity-100">Tech</a></li>
          <li><a href="#Projects" onClick={handleNavClick("Projects")} className="opacity-70 transition-opacity duration-300 hover:opacity-100">Projects</a></li>
          <li><a href="#Contact" onClick={handleNavClick("Contact")} className="opacity-70 transition-opacity duration-300 hover:opacity-100">Contact</a></li>
        </ul>

        {/* desktop socials */}
        <ul className="hidden md:flex gap-5">
          <li>
            <a
              href="https://www.linkedin.com/in/shady-h-dajani-"
              target="_blank" rel="noopener noreferrer"
              className="opacity-70 transition-all duration-300 hover:text-blue-300 hover:opacity-100"
            >
              <BsLinkedin size={22} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/K1RBY-S"
              target="_blank" rel="noopener noreferrer"
              className="opacity-70 transition-all duration-300 hover:text-purple-300 hover:opacity-100"
            >
              <BsGithub size={22} />
            </a>
          </li>
        </ul>

        {/* mobile toggle */}
        <button
          onClick={toggle}
          className="block md:hidden text-4xl opacity-70 transition-opacity duration-300 hover:opacity-100"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <BiX /> : <BiMenu />}
        </button>
      </div>

      {/* mobile panel */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-gray-800 bg-black/90">
          <div className="flex flex-col gap-8 p-6">
            <a href="#Home" onClick={handleNavClick("Home")} className="opacity-80 hover:opacity-100">Home</a>
            <a href="#Experience" onClick={handleNavClick("Experience")} className="opacity-80 hover:opacity-100">Experience</a>
            <a href="#Tech" onClick={handleNavClick("Tech")} className="opacity-80 hover:opacity-100">Tech</a>
            <a href="#Projects" onClick={handleNavClick("Projects")} className="opacity-80 hover:opacity-100">Projects</a>
            <a href="#Contact" onClick={handleNavClick("Contact")} className="opacity-80 hover:opacity-100">Contact</a>

            <div className="flex gap-5 pt-2">
              <a
                href="https://www.linkedin.com/in/shady-h-dajani-"
                target="_blank" rel="noopener noreferrer"
                className="opacity-80 transition-all duration-300 hover:text-blue-300 hover:opacity-100"
              >
                <BsLinkedin size={20} />
              </a>
              <a
                href="https://github.com/K1RBY-S"
                target="_blank" rel="noopener noreferrer"
                className="opacity-80 transition-all duration-300 hover:text-purple-300 hover:opacity-100"
              >
                <BsGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
