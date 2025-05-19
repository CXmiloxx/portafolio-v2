/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import portada from "/por.jpg";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { FaArrowRight } from "react-icons/fa";
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

  // Datos de proyectos de ejemplo


  // Datos de habilidades


  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* Hero Section */}
      <section ref={homeRef} id="home" className="min-h-screen w-full flex items-center justify-center px-6 py-24 pt-32">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto">

          {/* Texto */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0 animate-slide-up"
          >
            <h1 className="mb-6">
              {t("homePage.title")}
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              {t("homePage.subTitle")}
            </p>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="btn btn-primary"
            >
              {t("homePage.learnMore")} <FaArrowRight className="ml-2" />
            </button>
          </motion.div>

          {/* Imagen animada circular */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="lg:w-1/2 flex justify-center animate-slide-up"
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-blue-200 dark:border-blue-500 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-blue-300/30 dark:hover:shadow-blue-500/30">
              <img
                src={portada}
                alt="Presentación"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
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
