/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import portada from "/por.jpg";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useRef } from "react";
import AboutPage from "../aboutPage/AboutPage";
import ProjectsPage from "../projectsPage/ProjectsPage";
import SkillsPage from "../skillsPages/SkillsPage";
import ContactPage from "../contactPage/ContactPage";

export default function HomePage() {
  const { t } = useTranslation();

  // Referencias para cada sección
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Función para scroll suave a las secciones
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Actualizar NavItem para usar scrollToSection
  useEffect(() => {
    // Exponer las funciones de scroll al objeto window para que NavBar pueda acceder a ellas
    window.scrollToHome = () => scrollToSection(homeRef);
    window.scrollToAbout = () => scrollToSection(aboutRef);
    window.scrollToProjects = () => scrollToSection(projectsRef);
    window.scrollToSkills = () => scrollToSection(skillsRef);
    window.scrollToContact = () => scrollToSection(contactRef);

    return () => {
      // Limpiar cuando el componente se desmonte
      delete window.scrollToHome;
      delete window.scrollToAbout;
      delete window.scrollToProjects;
      delete window.scrollToSkills;
      delete window.scrollToContact;
    };
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Hero Section */}
      <section ref={homeRef} id="home" className="min-h-screen w-full flex items-center justify-center px-6 py-24 pt-32 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
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
              className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto lg:mx-0 mb-6 rounded-full"
            ></motion.div>

            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent leading-tight">
              {t("homePage.title")}
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {t("homePage.subTitle")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(projectsRef)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
                Descargar CV
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
                className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/camilo-guapacha-a6732b270"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
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
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 bg-blue-400/20 rounded-full blur-2xl animate-pulse"></div>

              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 dark:border-gray-700/30 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-blue-500/20 backdrop-blur-sm">
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
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg"
              ></motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full shadow-lg"
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
            className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-blue-500 rounded-full mt-2"
            ></motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <AboutPage aboutRef={aboutRef} />

      {/* Projects Section */}
      <ProjectsPage projectsRef={projectsRef} />

      {/* Skills Section */}
      <SkillsPage skillsRef={skillsRef} />

      {/* Contact Section / Footer */}
      <ContactPage contactRef={contactRef} />
    </div>
  );
}
