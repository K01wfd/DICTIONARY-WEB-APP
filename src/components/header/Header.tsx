import logo from '../../assets/images/logo.svg';
import Nav from './Nav';
import styles from '../../styles/header/header.module.css';

function Header() {
  return (
    <header>
      <div className={`container`}>
        <div className={styles.headerWrapper}>
          <img src={logo} className={styles.logo} alt='logo' />
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
