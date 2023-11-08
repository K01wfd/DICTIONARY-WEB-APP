import styles from '../../styles/header/menu.module.css';
import arrowDown from '../../assets/images/icon-arrow-down.svg';
import { useState } from 'react';

interface Props {
  onFontSelect: (font: string) => void;
  selectedFont: string;
}
function FontsMenu({ onFontSelect, selectedFont }: Props) {
  const [menuActive, setMenuActive] = useState(false);

  const fontsMap = [
    { label: 'Sans Serif', value: 'sans', fontfamily: 'sans' },
    { label: 'Serif', value: 'serif', fontfamily: 'serif' },
    { label: 'Mono', value: 'mono', fontfamily: 'mono' },
  ];

  return (
    <div className={styles.menu}>
      <button
        className={styles.menuButton}
        role='combobox'
        aria-labelledby='select button'
        aria-haspopup='listbox'
        aria-expanded='false'
        aria-controls='select-dropdown'
        onClick={() => setMenuActive(!menuActive)}
      >
        <span className={styles.menuSelectedValue}>{selectedFont}</span>
        <img
          src={arrowDown}
          className={styles.menuArrow}
          alt='arrow down icon'
        />
      </button>
      <ul
        className={menuActive ? styles.menuList : 'visuallyHidden'}
        role='listbox'
        id='select-dropdown'
      >
        {fontsMap.map((font) => (
          <li
            key={font.value}
            role='option'
            className={styles.menuItem}
            onClick={() => setMenuActive(false)}
          >
            <input
              type='radio'
              name='fontOption'
              id={font.value}
              onChange={() => onFontSelect(font.value)}
            />
            <label htmlFor={font.value} className={font.fontfamily}>
              {font.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FontsMenu;
