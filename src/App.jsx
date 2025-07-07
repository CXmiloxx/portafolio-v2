import Layout from './layout/Layout';
import HomePage from './pages/homePages/HomePage';
import { useRef, useEffect, useCallback, useMemo } from "react";
import AboutPage from "./pages/aboutPage/AboutPage";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import SkillsPage from "./pages/skillsPages/SkillsPage";
import ContactPage from "./pages/contactPage/ContactPage";

export default function App() {
  // Referencias para cada sección
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Función para scroll suave a las secciones - memoizada con useCallback
  const scrollToSection = useCallback((ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Configurar las funciones de navegación en window
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
  }, [scrollToSection]);

  // Memoizar las props para HomePage para evitar re-renders innecesarios
  const homePageProps = useMemo(() => ({
    homeRef,
    projectsRef,
    scrollToSection
  }), [scrollToSection]);

  return (
    <Layout>
      <HomePage {...homePageProps} />
      {/* About Section */}
      <AboutPage aboutRef={aboutRef} />

      {/* Projects Section */}
      <ProjectsPage projectsRef={projectsRef} />

      {/* Skills Section */}
      <SkillsPage skillsRef={skillsRef} />

      {/* Contact Section / Footer */}
      <ContactPage contactRef={contactRef} />
    </Layout>
  );
}
