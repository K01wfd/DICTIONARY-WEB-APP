import logo from '../../assets/images/logo.svg';
import Nav from './Nav';
import styles from '../../styles/header/header.module.css';
function Header() {
  return (
    <header className={styles.header}>
      <div className={`container`}>
        <img src={logo} className={styles.logo} alt='logo' />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
