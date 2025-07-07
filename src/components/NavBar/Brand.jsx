import icon from "/icon.webp"
export default function Brand() {
  return (
    <a href="#" className="flex items-center space-x-3 group">
      <div className="relative">
        <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 rounded-xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
        <img src={icon} className="h-12 relative z-10 transition-transform duration-300 group-hover:scale-110" alt="Logo" />
      </div>
      <span className="text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-gray-700 group-hover:to-gray-500 dark:group-hover:from-gray-200 dark:group-hover:to-gray-400 transition-all duration-300">
        Cxmilo
      </span>
    </a>
  );
}
