import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTranslation } from 'react-i18next'

export default function ButtonLanguage() {
  const { t } = useTranslation()
  const { languageChange, language } = useLanguage()
  const languages = Object.entries(t('language', { returnObjects: true }))


  return (
    <div className="flex">
      <select
      value={language}
        onChange={(e) => languageChange(e.target.value)}
        className="rounded-md border border-gray-300 text-xl bg-white cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {languages.map(([key, lang]) => (
          <option key={key} value={key}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  )
}
