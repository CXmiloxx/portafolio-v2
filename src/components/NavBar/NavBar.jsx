import { useState } from 'react';
import NavMenu from './NavMenu';
import Brand from './Brand';
import NavControls from './NavControls';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="dark:bg-gray-900 bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Brand />

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
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

        <div className={`${menuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto`} id="navbar-menu">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mt-4 md:mt-0">
            <NavMenu />
            <NavControls />
          </div>
        </div>
      </div>
    </nav>
  );
}
