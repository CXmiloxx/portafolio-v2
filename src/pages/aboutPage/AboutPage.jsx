import { t } from "i18next";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutPage({ aboutRef }) {

  return (
    <section ref={aboutRef} id="about" className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="animate-slide-up"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              {t("about.title", "Sobre Mí")}
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Conoce más sobre mi experiencia, formación y pasión por el desarrollo
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Content Section */}
              <div className="lg:w-2/3 p-8 lg:p-12">
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    {t("about.name", "Juan Camilo Guapacha")}
                  </h3>

                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    {t("about.description", "Soy un desarrollador Full Stack apasionado por crear experiencias digitales atractivas y funcionales. Con experiencia en tecnologías frontend y backend, me especializo en construir aplicaciones web modernas y responsivas que resuelven problemas reales.")}
                  </p>

                  {/* Stats Section */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 px-6 py-4 rounded-2xl border border-blue-200/50 dark:border-blue-700/30 transition-all duration-300 hover:shadow-lg"
                    >
                      <h4 className="font-bold text-blue-800 dark:text-blue-300 text-lg">{t("about.experience", "Experiencia")}</h4>
                      <p className="text-2xl font-bold text-gray-800 dark:text-white">1+ {t("about.years", "años")}</p>
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 px-6 py-4 rounded-2xl border border-green-200/50 dark:border-green-700/30 transition-all duration-300 hover:shadow-lg"
                    >
                      <h4 className="font-bold text-green-800 dark:text-green-300 text-lg">{t("about.projects", "Proyectos")}</h4>
                      <p className="text-2xl font-bold text-gray-800 dark:text-white">20+</p>
                    </motion.div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      href="https://github.com/CXmiloxx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    >
                      <FaGithub size={24} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      href="https://www.linkedin.com/in/camilo-guapacha-a6732b270"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    >
                      <FaLinkedin size={24} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Section */}
              <div className="lg:w-1/3 p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative h-full flex items-center justify-center"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-2xl blur-xl"></div>

                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 right-8 w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg"
                  ></motion.div>
                  <motion.div
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 left-8 w-4 h-4 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full shadow-lg"
                  ></motion.div>

                  {/* Content placeholder */}
                  <div className="text-center relative z-10">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                      <FaCode className="text-6xl text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      Desarrollador Full Stack
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Apasionado por la tecnología y la innovación
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
