import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"
import { HiUser, HiMail, HiChatAlt2, HiPaperAirplane } from 'react-icons/hi'
import { FaPaperPlane, FaExclamationTriangle } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function Form() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Validation rules
  const validationRules = {
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
    },
    email: {
      required: true,
      maxLength: 100,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    subject: {
      required: true,
      minLength: 1,
      maxLength: 100
    },
    message: {
      required: true,
      minLength: 2,
      maxLength: 1000
    }
  }

  // Validation function
  const validateField = (name, value) => {
    const rules = validationRules[name]
    const fieldErrors = []

    if (rules.required && !value.trim()) {
      fieldErrors.push(t(`contact.form.validation.${name}.required`))
    }

    if (value.trim() && rules.minLength && value.trim().length < rules.minLength) {
      fieldErrors.push(t(`contact.form.validation.${name}.minLength`))
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      fieldErrors.push(t(`contact.form.validation.${name}.maxLength`))
    }

    if (rules.pattern && value.trim() && !rules.pattern.test(value)) {
      if (name === 'email') {
        fieldErrors.push(t(`contact.form.validation.${name}.invalid`))
      } else {
        fieldErrors.push(t(`contact.form.validation.${name}.pattern`))
      }
    }

    return fieldErrors
  }

  // Handle field changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      const fieldErrors = validateField(name, value)
      setErrors(prev => ({
        ...prev,
        [name]: fieldErrors.length > 0 ? fieldErrors[0] : null
      }))
    }
  }

  // Handle field blur
  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))

    const fieldErrors = validateField(name, value)
    setErrors(prev => ({
      ...prev,
      [name]: fieldErrors.length > 0 ? fieldErrors[0] : null
    }))
  }

  // Validate all fields
  const validateForm = () => {
    const newErrors = {}
    let isValid = true

    Object.keys(validationRules).forEach(fieldName => {
      const fieldErrors = validateField(fieldName, formData[fieldName])
      if (fieldErrors.length > 0) {
        newErrors[fieldName] = fieldErrors[0]
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors({})
      setTouched({})
      alert(t('contact.form.success', '¡Mensaje enviado con éxito!'))
    }, 2000)
  }

  // Check if field has error
  const hasError = (fieldName) => {
    return touched[fieldName] && errors[fieldName]
  }

  // Get field border color based on state
  const getFieldBorderColor = (fieldName) => {
    if (hasError(fieldName)) {
      return 'border-red-400/50 focus:border-red-400 hover:border-red-400/70'
    }
    if (touched[fieldName] && !errors[fieldName]) {
      return 'border-green-400/50 focus:border-green-400 hover:border-green-400/70'
    }
    return 'border-cyan-400/30 focus:border-cyan-400 hover:border-cyan-400/50'
  }

  // Get field background based on state
  const getFieldBackground = (fieldName) => {
    if (hasError(fieldName)) {
      return 'bg-gradient-to-r from-red-50/10 via-red-50/10 to-red-50/10 hover:from-red-50/20 hover:via-red-50/20 hover:to-red-50/20'
    }
    if (touched[fieldName] && !errors[fieldName]) {
      return 'bg-gradient-to-r from-green-50/10 via-green-50/10 to-green-50/10 hover:from-green-50/20 hover:via-green-50/20 hover:to-green-50/20'
    }
    return 'bg-gradient-to-r from-cyan-50/10 via-blue-50/10 to-purple-50/10 hover:from-cyan-50/20 hover:via-blue-50/20 hover:to-purple-50/20'
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full max-w-4xl mx-auto"
    >
      {/* Form Header */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
          {t('contact.form.title', 'Envíame un Mensaje')}
        </h3>
        <p className="text-gray-200 text-lg max-w-2xl mx-auto leading-relaxed">
          {t('contact.form.subtitle', 'Cuéntame sobre tu proyecto o idea, estaré encantado de ayudarte')}
        </p>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name Field */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <HiUser className={`h-6 w-6 transition-all duration-300 group-hover:scale-110 ${hasError('name') ? 'text-red-400' : touched.name && !errors.name ? 'text-green-400' : 'text-cyan-400'
              }`} />
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`w-full pl-14 pr-6 py-5 ${getFieldBackground('name')} backdrop-blur-sm border-2 ${getFieldBorderColor('name')} rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 transition-all duration-500 shadow-lg hover:shadow-xl`}
            placeholder={t('contact.form.name', 'Tu nombre completo')}
          />
          <AnimatePresence>
            {hasError('name') && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -bottom-6 left-0 flex items-center gap-2 text-red-400 text-sm"
              >
                <FaExclamationTriangle className="w-4 h-4" />
                {errors.name}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <HiMail className={`h-6 w-6 transition-all duration-300 group-hover:scale-110 ${hasError('email') ? 'text-red-400' : touched.email && !errors.email ? 'text-green-400' : 'text-blue-400'
              }`} />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`w-full pl-14 pr-6 py-5 ${getFieldBackground('email')} backdrop-blur-sm border-2 ${getFieldBorderColor('email')} rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-500 shadow-lg hover:shadow-xl`}
            placeholder={t('contact.form.email', 'tu@email.com')}
          />
          <AnimatePresence>
            {hasError('email') && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -bottom-6 left-0 flex items-center gap-2 text-red-400 text-sm"
              >
                <FaExclamationTriangle className="w-4 h-4" />
                {errors.email}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Subject Field */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <HiChatAlt2 className={`h-6 w-6 transition-all duration-300 group-hover:scale-110 ${hasError('subject') ? 'text-red-400' : touched.subject && !errors.subject ? 'text-green-400' : 'text-purple-400'
              }`} />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`w-full pl-14 pr-6 py-5 ${getFieldBackground('subject')} backdrop-blur-sm border-2 ${getFieldBorderColor('subject')} rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500/30 transition-all duration-500 shadow-lg hover:shadow-xl`}
            placeholder={t('contact.form.subject', 'Asunto del mensaje')}
          />
          <AnimatePresence>
            {hasError('subject') && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -bottom-6 left-0 flex items-center gap-2 text-red-400 text-sm"
              >
                <FaExclamationTriangle className="w-4 h-4" />
                {errors.subject}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Message Field */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            rows={8}
            className={`w-full px-6 py-5 ${getFieldBackground('message')} backdrop-blur-sm border-2 ${getFieldBorderColor('message')} rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 transition-all duration-500 shadow-lg hover:shadow-xl resize-none`}
            placeholder={t('contact.form.message', 'Cuéntame sobre tu proyecto o idea...')}
          />
          <AnimatePresence>
            {hasError('message') && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -bottom-6 left-0 flex items-center gap-2 text-red-400 text-sm"
              >
                <FaExclamationTriangle className="w-4 h-4" />
                {errors.message}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-6"
        >
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full flex items-center justify-center gap-4 px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                {t('contact.form.sending', 'Enviando...')}
              </>
            ) : (
              <>
                <FaPaperPlane className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                {t('contact.form.send', 'Enviar Mensaje')}
              </>
            )}
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  )
}
