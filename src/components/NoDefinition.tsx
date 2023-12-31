import styles from '../styles/noDefinition.module.css';

function NoDefinition() {
  return (
    <div className='container'>
      <div className={styles.noDef}>
        <span>😕</span>
        <h2>No Definitions Found</h2>
        <p>
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    </div>
  );
}

export default NoDefinition;
