import { useTranslation } from "react-i18next";
import NavItem from "./NavItem";

export default function NavMenu() {
  const { t } = useTranslation()

  const navItems = [
    { id: 'home', label: t("navbar.home", "Inicio") },
    { id: 'about', label: t("navbar.about", "Sobre Mí") },
    { id: 'projects', label: t("navbar.projects", "Proyectos") },
    { id: 'skills', label: t("navbar.skills", "Habilidades") },
    { id: 'contact', label: t("navbar.contact", "Contacto") }
  ];

  return (
    <ul className="flex flex-col md:flex-row gap-2 md:gap-4 font-medium">
      {navItems.map((item, key) => (
        <NavItem
          key={key}
          id={item.id}
          label={item.label}
          active={key === 0}
        />
      ))}
    </ul>
  );
}
