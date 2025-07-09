import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FaGlobe, FaChevronDown } from 'react-icons/fa'

export default function ButtonLanguage() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' }
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-black/90 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-glow border border-gray-200/50 dark:border-gray-700/50 group"
      >
        <FaGlobe className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300" />
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="font-medium text-sm">{currentLanguage.code.toUpperCase()}</span>
        <FaChevronDown className={`w-3 h-3 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full -right-15 mt-2 ml-10 w-48 bg-white/90 dark:bg-black/90 rounded-2xl shadow-glow border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-md z-50 overflow-hidden">
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 ${i18n.language === language.code
                  ? 'text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800'
                  : 'text-gray-700 dark:text-gray-300'
                  }`}
              >
                <span className="text-xl">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
                {i18n.language === language.code && (
                  <div className="ml-auto w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
