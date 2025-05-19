import { useTheme } from "../context/ThemeContext"
import { MoonIcon } from "lucide-react"
import { SunIcon } from "lucide-react"

export default function ButtonTheme() {
  const { toggleTheme, theme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {theme !== 'dark' ? (
        <SunIcon className="h-5 w-5 text-yellow-500 animate-fade-in" />
      ) : (
        <MoonIcon className="h-5 w-5 text-blue-400 animate-fade-in" />
      )}
    </button>
  )
}
