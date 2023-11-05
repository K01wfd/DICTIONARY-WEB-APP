import logo from '../../assets/images/logo.svg';
import styles from '../../styles/header/header.module.css';
import switchStyles from '../../styles/header/switch.module.css';
import navStyles from '../../styles/header/header.module.css';
import moon from '../../assets/images/icon-moon.svg';
import FontsMenu from './FontsMenu';

interface Props {
  onThemeChange: () => void;
  onFontSelect: (font: string) => void;
  theme: string;
}
function Header({ onThemeChange, theme, onFontSelect }: Props) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.style.setProperty('--clr-gray-100-sec', '#1f1f1f');
    root.style.setProperty(
      '--menu-box-shadow',
      '0px 5px 30px 0px rgba(164, 69, 237, 0.3)'
    );
    root.style.setProperty('--clr-devider', '#757575');
  } else {
    root.style.setProperty('--clr-gray-100-sec', '#fff');
    root.style.setProperty(
      '--menu-box-shadow',
      '0px 5px 30px 0px rgba(0, 0, 0, 0.1)'
    );
    root.style.setProperty('--clr-devider', '#e9e9e9');
  }

  return (
    <header>
      <div className={`container`}>
        <div className={styles.headerWrapper}>
          <img src={logo} className={styles.logo} alt='logo' />
          <div className={navStyles.nav}>
            <FontsMenu onFontSelect={onFontSelect} />
            <div className='verticalDevider'></div>
            <div className={switchStyles.toggleBox}>
              <input
                type='checkbox'
                id='themeTogller'
                className={switchStyles.themToggler}
                onChange={() => {
                  document.body.classList.toggle('dark');
                  onThemeChange();
                }}
              />
              <img src={moon} alt='moon icon' />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
