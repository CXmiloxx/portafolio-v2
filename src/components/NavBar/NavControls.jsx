import ButtonLanguage from '../ButtonLanguage';
import ButtonTheme from '../ButtonTheme';

export default function NavControls() {
  return (
    <div className="flex items-center gap-4 mt-4 md:mt-0">
      <ButtonLanguage />
      <ButtonTheme />
    </div>
  );
}
