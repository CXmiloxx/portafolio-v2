import { useTheme } from "../context/ThemeContext"
import { MoonIcon } from "lucide-react"
import { SunIcon } from "lucide-react"

export default function ButtonTheme() {
  const { toggleTheme, theme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      className="bg-white dark:bg-gray-900 dark:text-white"
    >
      {theme != 'dark' ? (
        <SunIcon />
      ) : (
        <MoonIcon />
      )
      }
    </button>
  )
}
