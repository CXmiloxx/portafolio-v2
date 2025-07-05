import { useTheme } from "../context/ThemeContext"
import { MoonIcon } from "lucide-react"
import { SunIcon } from "lucide-react"

export default function ButtonTheme() {
  const { toggleTheme, theme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-xl transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-gray-50 dark:hover:bg-gray-700/90 text-gray-900 dark:text-gray-100 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:-translate-y-1 group"
      aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
        {theme !== 'dark' ? (
          <SunIcon className="h-5 w-5 text-yellow-500 relative z-10 animate-fade-in" />
        ) : (
          <MoonIcon className="h-5 w-5 text-blue-400 relative z-10 animate-fade-in" />
        )}
      </div>
    </button>
  )
}
