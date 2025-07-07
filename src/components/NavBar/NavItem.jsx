/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'

export default function NavItem({ label, id, active = false }) {
  const scrollFunctions = {
    home: () => window.scrollToHome && window.scrollToHome(),
    about: () => window.scrollToAbout && window.scrollToAbout(),
    projects: () => window.scrollToProjects && window.scrollToProjects(),
    skills: () => window.scrollToSkills && window.scrollToSkills(),
    contact: () => window.scrollToContact && window.scrollToContact(),
  };

  const handleClick = () => {
    if (scrollFunctions[id]) {
      scrollFunctions[id]();
    }

    // Cerrar el menú móvil si está abierto
    if (window.closeNavMenu) {
      window.closeNavMenu();
    }
  };

  return (
    <li>
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`relative px-6 py-4 rounded-2xl font-semibold transition-all duration-300 group overflow-hidden ${active
          ? "text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-glow font-bold"
          : "text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 border border-transparent hover:border-gray-300 dark:hover:border-gray-600"
          }`}
      >
        {/* Background glow effect */}
        <div className={`absolute inset-0 bg-gray-200/0 dark:bg-gray-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${active ? 'opacity-100' : ''}`}></div>

        {/* Text with relative positioning */}
        <span className="relative z-10 flex items-center gap-3">
          {label}
          {active && (
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-gray-500 dark:bg-gray-500 rounded-full animate-pulse delay-75"></div>
            </div>
          )}
        </span>

        {/* Animated underline */}
        <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gray-600 dark:bg-gray-400 rounded-full transition-all duration-500 group-hover:w-3/4 ${active ? 'w-3/4' : ''}`}></span>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-2 right-3 w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 animate-float ${active ? 'opacity-100' : ''}`}></div>
          <div className={`absolute bottom-2 left-3 w-0.5 h-0.5 bg-gray-300 dark:bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 animate-float ${active ? 'opacity-100' : ''}`}></div>
        </div>

        {/* Ripple effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </motion.button>
    </li>
  );
}
