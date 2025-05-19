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
          className="flex items-center gap-2 p-2 rounded-full transition-all duration-300 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Cambiar idioma"
        >
          <Globe className="h-5 w-5 text-blue-500 dark:text-blue-400" />
          <span className="text-sm font-medium">{language.toUpperCase()}</span>
        </button>

        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fade-in">
          {languages.map(([key, lang]) => (
            <button
              key={key}
              onClick={() => languageChange(key)}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${language === key ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
