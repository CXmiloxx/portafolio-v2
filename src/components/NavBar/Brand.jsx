import icon from "/icon.webp"
export default function Brand() {
  return (
    <a href="#" className="flex items-center space-x-3 group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
        <img src={icon} className="h-10 relative z-10 transition-transform duration-300 group-hover:scale-110" alt="Logo" />
      </div>
      <span className="text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-300">
        Cxmilo
      </span>
    </a>
  );
}
