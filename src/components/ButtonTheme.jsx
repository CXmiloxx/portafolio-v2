import { useTheme } from '../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ButtonTheme() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 bg-white/90 dark:bg-black/90 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-glow border border-gray-200/50 dark:border-gray-700/50 group relative overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gray-200/0 dark:bg-gray-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Icon with relative positioning */}
      <div className="relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
        {theme === 'dark' ? (
          <FaSun className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300" />
        ) : (
          <FaMoon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300" />
        )}
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1 right-1 w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"></div>
        <div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-gray-300 dark:bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300"></div>
      </div>
    </button>
  )
}
