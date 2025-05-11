import { useTranslation } from "react-i18next";
import NavItem from "./NavItem";

export default function NavMenu() {
  const { t } = useTranslation()

  const navItems = Object.entries(t("navbar", { returnObjects: true }))
  return (
    <ul className="flex flex-col md:flex-row gap-2 md:gap-4 font-medium">
      {navItems.map(([index, item], key) => (
        console.log(index, item),

        <NavItem key={key} label={item} active={key === 0} />
      ))}
    </ul>
  );
}
