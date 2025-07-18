import { useState, useEffect } from 'react';
import NavMenu from './NavMenu';
import Brand from './Brand';
import NavControls from './NavControls';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Detectar la sección activa basada en el scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      // Detectar scroll para el navbar
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detectar sección activa
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          // Considerar una sección activa si está en el viewport
          return rect.top <= windowHeight * 0.3 && rect.bottom >= windowHeight * 0.3;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Ejecutar una vez al cargar para establecer la sección inicial
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Cerrar el menú móvil cuando se hace clic en un elemento de navegación
  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  // Exponer la función closeMenu para que NavItem pueda usarla
  useEffect(() => {
    window.closeNavMenu = closeMenu;
    return () => {
      delete window.closeNavMenu;
    };
  }, [menuOpen]);

  return (
    <nav className={`fixed w-full z-50 top-0 start-0 transition-all duration-500 ${scrolled
      ? 'bg-white/95 dark:bg-black/95 shadow-glow border-b border-gray-200/50 dark:border-gray-800/50 py-3'
      : 'bg-white/90 dark:bg-black/90 shadow-glow border-b border-gray-200/30 dark:border-gray-800/30 py-4'
      }`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
        <Brand />

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 transition-all duration-300 shadow-glow"
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        <div
          className={`${menuOpen ? 'block' : 'hidden'
            } w-full md:flex md:w-auto transition-all duration-500`}
          id="navbar-menu"
        >
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mt-4 md:mt-0 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-2xl md:bg-transparent md:dark:bg-transparent p-4 md:p-0 border border-gray-200/50 dark:border-gray-700/50 md:border-none shadow-glow md:shadow-none">
            <NavMenu activeSection={activeSection} />
            <NavControls />
          </div>
        </div>
      </div>
    </nav>
  );
}
