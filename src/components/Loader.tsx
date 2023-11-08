import styles from '../styles/loader.module.css';

function Loader() {
  return (
    <div className={styles.loaderBox}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loader;
