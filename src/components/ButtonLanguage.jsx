import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'

export default function ButtonLanguage() {
  const { t } = useTranslation()
  const { languageChange, language } = useLanguage()
  const languages = Object.entries(t('language', { returnObjects: true }))

  return (
    <div className="flex items-center">
      <div className="relative group">
        <button
          className="flex items-center gap-2 p-3 rounded-xl transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-gray-50 dark:hover:bg-gray-700/90 text-gray-900 dark:text-gray-100 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:-translate-y-1"
          aria-label="Cambiar idioma"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400 relative z-10" />
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">{language.toUpperCase()}</span>
        </button>

        <div className="absolute right-0 mt-3 w-44 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50">
          {languages.map(([key, lang]) => (
            <button
              key={key}
              onClick={() => languageChange(key)}
              className={`w-full text-left px-4 py-3 text-sm transition-all duration-300 ${language === key
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
