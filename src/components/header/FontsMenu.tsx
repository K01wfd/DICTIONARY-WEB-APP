import styles from '../../styles/header/menu.module.css';
import arrowDown from '../../assets/images/icon-arrow-down.svg';
function FontsMenu() {
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
      >
        <span className={styles.menuSelectedValue}>Open this select menu</span>
        <img
          src={arrowDown}
          className={styles.menuArrow}
          alt='arrow down icon'
        />
      </button>
      <ul className={styles.menuList} role='listbox' id='select-dropdown'>
        {fontsMap.map((font) => (
          <li key={font.value} role='option' className={styles.menuItem}>
            <input
              type='radio'
              name='fontOption'
              id={font.value}
              value={font.value}
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
