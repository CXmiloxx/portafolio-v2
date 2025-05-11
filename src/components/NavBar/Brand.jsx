import icon from "/icon.webp"
export default function Brand() {
  return (
    <a href="#" className="flex items-center space-x-3">
      <img src={icon} className="h-10" alt="Logo" />
      <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">Cxmilo</span>
    </a>
  );
}
