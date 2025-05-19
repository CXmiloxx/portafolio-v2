import { t } from "i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import portada from "/por.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


export default function AboutPage({ aboutRef }) {
  return (
    <section ref={aboutRef} id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="animate-slide-up"
        >
          <h2 className="text-center mb-12">
            {t("about.title", "Sobre Mí")}
          </h2>

          <div className="card">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
                  <img
                    src={portada}
                    alt="Profile"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="md:w-2/3">
                <h3 className="mb-4">
                  {t("about.name", "Juan Camilo Guapacha")}
                </h3>

                <p className="mb-6">
                  {t("about.description", "Soy un desarrollador Full Stack apasionado por crear experiencias digitales atractivas y funcionales. Con experiencia en tecnologías frontend y backend, me especializo en construir aplicaciones web modernas y responsivas que resuelven problemas reales.")}
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-blue-50 dark:bg-blue-900/30 px-4 py-3 rounded-lg transition-all duration-300 hover:shadow-md">
                    <h4 className="font-medium text-blue-800 dark:text-blue-300">{t("about.experience", "Experiencia")}</h4>
                    <p className="text-gray-600 dark:text-gray-400">1+ {t("about.years", "años")}</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 px-4 py-3 rounded-lg transition-all duration-300 hover:shadow-md">
                    <h4 className="font-medium text-green-800 dark:text-green-300">{t("about.projects", "Proyectos")}</h4>
                    <p className="text-gray-600 dark:text-gray-400">20+</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="https://github.com/CXmiloxx" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                    <FaGithub size={24} />
                  </a>
                  <a href="www.linkedin.com/in/camilo-guapacha-a6732b270" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
