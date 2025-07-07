import { t } from 'i18next'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import Form from './components/Form';

export default function ContactPage({ contactRef }) {
  return (
    <section ref={contactRef} id="contact" className="py-24 px-6 bg-white dark:bg-black text-gray-800 dark:text-gray-100 transition-colors duration-500 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gray-300/10 dark:bg-gray-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-20 left-20 w-64 h-64 bg-gray-400/10 dark:bg-gray-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-300/5 dark:bg-gray-600/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Header Section */}
          <div className="mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <div className="w-20 h-1 bg-gray-600 dark:bg-gray-400 mx-auto rounded-full shadow-lg"></div>
            </motion.div>

            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-gradient-primary relative">
              {t("contact.title")}
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [0.98, 1, 0.98]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 text-gradient-primary blur-sm"
              >
                {t("contact.title")}
              </motion.div>
            </h2>

            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {t("contact.description", "¿Interesado en trabajar juntos? ¡Contáctame para discutir tu proyecto o simplemente para saludar!")}
            </p>
          </div>

          {/* Form Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-glass rounded-3xl p-10 shadow-glow mb-16 relative overflow-hidden group"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gray-300/5 dark:bg-gray-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-300/20 dark:bg-gray-600/20 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-400/20 dark:bg-gray-500/20 rounded-full blur-xl transform -translate-x-12 translate-y-12"></div>

            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gray-300/20 dark:bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

            <div className="relative z-10">
              <Form />
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="pt-16 border-t border-gray-700/50"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
                © 2025 Juan Camilo Guapacha Largo. {t("footer.rightsReserved", "Todos los derechos reservados.")}
              </p>

              <div className="flex space-x-6">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://github.com/CXmiloxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-glass rounded-xl shadow-glow transition-all duration-300 text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
                >
                  <FaGithub size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://www.linkedin.com/in/camilo-guapacha-a6732b270"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-glass rounded-xl shadow-glow transition-all duration-300 text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
                >
                  <FaLinkedin size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
