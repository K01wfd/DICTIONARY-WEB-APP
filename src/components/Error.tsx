import styles from '../styles/error.module.css';
function Error() {
  return (
    <div className='container'>
      <div className={styles.error}>
        <h2>Oops! Error fetching data</h2>
        <p>Try another word or you can try again later.</p>
      </div>
    </div>
  );
}

export default Error;
