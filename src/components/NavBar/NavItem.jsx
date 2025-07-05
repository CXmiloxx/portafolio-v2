export default function NavItem({ label, id, active = false }) {
  const scrollFunctions = {
    home: () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }),
    about: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
    projects: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
    skills: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }),
    contact: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
  };

  const handleClick = () => {
    if (scrollFunctions[id]) {
      scrollFunctions[id]();
    }

    // Cerrar el menú móvil si está abierto
    if (window.closeNavMenu) {
      window.closeNavMenu();
    }
  };

  return (
    <li>
      <button
        onClick={handleClick}
        className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${active
            ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
          } group`}
      >
        {label}
        <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-3/4 ${active ? 'w-3/4' : ''}`}></span>
      </button>
    </li>
  );
}
