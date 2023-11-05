import styles from '../../styles/header/header.module.css';
import sitchStyles from '../../styles/header/switch.module.css';
import moon from '../../assets/images/icon-moon.svg';
import FontsMenu from './FontsMenu';

function Nav() {
  return (
    <div className={styles.nav}>
      <FontsMenu />
      <div className='verticalDevider'></div>
      <div className={sitchStyles.toggleBox}>
        <input
          type='checkbox'
          id='themeTogller'
          className={sitchStyles.themToggler}
        />
        <img src={moon} alt='moon icon' />
      </div>
    </div>
  );
}

export default Nav;
