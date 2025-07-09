import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutPage({ aboutRef }) {
  const { t } = useTranslation();
  return (
    <section
      ref={aboutRef}
      id="about"
      className="bg-white dark:bg-black transition-colors duration-500"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gray-300/20 dark:bg-gray-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gray-400/20 dark:bg-gray-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
              <div className="w-20 h-1 bg-gray-600 dark:bg-gray-400 mx-auto rounded-full shadow-lg"></div>
            </motion.div>

            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-gradient-primary relative">
              {t("about.title")}
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [0.98, 1, 0.98],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 text-gradient-primary blur-sm"
              >
                {t("about.title")}
              </motion.div>
            </h2>

            <p className="text-lg text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
              {t("about.subtitle")}
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white dark:bg-black rounded-3xl shadow-glow overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Content Section */}
              <div className="lg:w-2/3 p-8 lg:p-12">
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-bold mb-6 text-gradient-primary">
                    {t("about.name", "Juan Camilo Guapacha")}
                  </h3>

                  <p className="text-lg text-gray-800 dark:text-gray-300 mb-8 leading-relaxed">
                    {t(
                      "about.description",
                      "Soy un desarrollador Full Stack apasionado por crear experiencias digitales atractivas y funcionales. Con experiencia en tecnologías frontend y backend, me especializo en construir aplicaciones web modernas y responsivas que resuelven problemas reales."
                    )}
                  </p>

                  {/* Stats Section */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="bg-gray-100 dark:bg-gray-800 px-6 py-4 rounded-2xl border border-gray-200/50 dark:border-gray-700/30 transition-all duration-300 hover:shadow-lg"
                    >
                      <h4 className="font-bold text-gray-900 dark:text-gray-200 text-lg">
                        {t("about.experience")}
                      </h4>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        1+ {t("about.years", "años")}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="bg-gray-100 dark:bg-gray-800 px-6 py-4 rounded-2xl border border-gray-200/50 dark:border-gray-700/30 transition-all duration-300 hover:shadow-lg"
                    >
                      <h4 className="font-bold text-gray-900 dark:text-gray-200 text-lg">
                        {t("about.projects", "Proyectos")}
                      </h4>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        20+
                      </p>
                    </motion.div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      href="https://github.com/CXmiloxx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-glow transition-all duration-300 text-gray-900 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
                    >
                      <FaGithub size={24} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      href="https://www.linkedin.com/in/camilo-guapacha-a6732b270"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-glow transition-all duration-300 text-gray-900 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
                    >
                      <FaLinkedin size={24} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Section */}
              <div className="lg:w-1/3 p-8 lg:p-12 bg-gray-100 dark:bg-black">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative h-full flex items-center justify-center"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gray-200/10 dark:bg-gray-600/10 rounded-2xl blur-xl"></div>

                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-8 right-8 w-6 h-6 bg-gray-600 dark:bg-gray-400 rounded-full shadow-lg"
                  ></motion.div>
                  <motion.div
                    animate={{ y: [5, -5, 5] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-8 left-8 w-4 h-4 bg-gray-500 dark:bg-gray-500 rounded-full shadow-lg"
                  ></motion.div>

                  {/* Content placeholder */}
                  <div className="text-center relative z-10">
                    <div className="w-32 h-32 bg-gray-600 dark:bg-gray-400 rounded-full mx-auto mb-6 flex items-center justify-center shadow-glow">
                      <FaCode className="text-6xl text-white dark:text-black" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {t("about.role")}
                    </h4>
                    <p className="text-gray-800 dark:text-gray-300 text-sm">
                    {t("about.passion")}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
