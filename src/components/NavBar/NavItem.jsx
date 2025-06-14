export default function NavItem({ label, id, active = false }) {
  const scrollFunctions = {
    home: window.scrollToHome,
    about: window.scrollToAbout,
    projects: window.scrollToProjects,
    skills: window.scrollToSkills,
    contact: window.scrollToContact,
  };

  const handleClick = () => {
    if (scrollFunctions[id]) {
      scrollFunctions[id]();
    }

    if (window.closeNavMenu) {
      window.closeNavMenu();
    }
  };

  return (
    <li>
      <button
        onClick={handleClick}
        className={`block px-4 py-2 rounded-md transition-all ${
          active
            ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-blue-500"
            : "text-gray-700 hover:bg-gray-100 md:hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
        }`}
      >
        {label}
      </button>
    </li>
  );
}
