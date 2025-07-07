/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import portada from "/ia.avif";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

export default function HomePage({
  homeRef,
  projectsRef,
  scrollToSection
}) {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-black transition-colors duration-500">
      {/* Hero Section */}
      <section ref={homeRef} id="home" className="min-h-screen w-full flex items-center justify-center px-6 py-24 pt-32 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-200/20 dark:bg-gray-800/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-300/20 dark:bg-gray-700/20 rounded-full blur-3xl"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto relative z-10">
          {/* Texto */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0 animate-slide-up"
          >
            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-20 h-1 bg-gray-600 dark:bg-gray-400 mx-auto lg:mx-0 mb-6 rounded-full"
            ></motion.div>

            <h2 className="text-5xl font-bold mb-8 text-gradient-primary relative">
              {t("homePage.title")}
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
                {t("homePage.title")}
              </motion.div>
            </h2>

            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {t("homePage.subTitle")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(projectsRef)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 text-white dark:text-gray-800 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {t("homePage.learnMore")} <FaArrowRight className="ml-2" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Cv.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-800 dark:text-gray-100 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50"
              >
                <FaDownload className="text-lg" />
                {t("homePage.downloadCV")}
              </motion.a>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-6 mt-8 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/CXmiloxx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50 text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/camilo-guapacha-a6732b270"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50 text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
              >
                <FaLinkedin size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Imagen animada circular */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="lg:w-1/2 flex justify-center animate-slide-up"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 bg-gray-300/20 dark:bg-gray-600/20 rounded-full blur-2xl animate-pulse"></div>

              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 dark:border-gray-700/30 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-gray-500/20 backdrop-blur-sm">
                <img
                  src={portada}
                  alt="Presentación"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gray-600 dark:bg-gray-400 rounded-full shadow-lg"
              ></motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-500 dark:bg-gray-500 rounded-full shadow-lg"
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-600 dark:border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mt-2"
            ></motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
