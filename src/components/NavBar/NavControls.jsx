import ButtonLanguage from '../ButtonLanguage';
import ButtonTheme from '../ButtonTheme';

export default function NavControls() {
  return (
    <div className="flex items-center gap-3 mt-6 md:mt-0 pt-4 md:pt-0 border-t border-gray-200/50 dark:border-gray-700/50 md:border-none">
      <ButtonLanguage />
      <ButtonTheme />
    </div>
  );
}
