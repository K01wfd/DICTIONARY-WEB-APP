import styles from '../../styles/header/header.module.css';
import moon from '../../assets/images/icon-moon.svg';
function Nav() {
  const fontsMap = [
    { label: 'Sans Serif', value: 'sans' },
    { label: 'Serif', value: 'serif' },
    { label: 'Mono', value: 'mono' },
  ];
  return (
    <div className={styles.nav}>
      <select className={styles.fontsMenu} name='fonts' id='fonts'>
        {fontsMap.map((font) => (
          <option className={styles.menuItem} value={font.value}>
            {font.label}
          </option>
        ))}
      </select>
      <div className={styles.toggleBox}>
        <input
          type='checkbox'
          id='themeTogller'
          className={styles.themToggler}
        />
        <img src={moon} alt='moon icon' />
      </div>
    </div>
  );
}

export default Nav;
