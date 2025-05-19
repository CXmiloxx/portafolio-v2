import { t } from 'i18next'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactPage({ contactRef }) {
  return (
    <section ref={contactRef} id="contact" className="py-20 px-6 bg-blue-900 dark:bg-gray-900 text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-white">
            {t("contact.title", "Contacto")}
          </h2>

          <p className="text-blue-200 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            {t("contact.description", "¿Interesado en trabajar juntos? ¡Contáctame para discutir tu proyecto o simplemente para saludar!")}
          </p>

          <a
            href="mailto:juancamilog9911@gmail.com"
            className="px-8 py-3 bg-white text-blue-900 dark:bg-blue-600 dark:text-white font-medium rounded-full hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors inline-block"
          >
            {t("contact.emailMe", "Envíame un Email")}
          </a>

          <div className="mt-16 pt-16 border-t border-blue-800 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-blue-200 dark:text-gray-400 mb-4 md:mb-0">
                © 2025 Juan Camilo Guapacha Largo. {t("footer.rightsReserved", "Todos los derechos reservados.")}
              </p>

              <div className="flex space-x-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 dark:text-gray-400 hover:text-white transition-colors">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 dark:text-gray-400 hover:text-white transition-colors">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
