export default function NavItem({ label, active = false }) {
  return (
    <li>
      <a
        href="#"
        className={`block px-4 py-2 rounded-md transition-all ${
          active
            ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-blue-500'
            : 'text-gray-700 hover:bg-gray-100 md:hover:text-blue-600 dark:text-white dark:hover:text-blue-400'
        }`}
      >
        {label}
      </a>
    </li>
  );
}
