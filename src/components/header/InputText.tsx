import search from '../../assets/images/icon-search.svg';
import styles from '../../styles/header/input.module.css';
function InputText() {
  return (
    <div className='container'>
      <form action=''>
        <div className={styles.inputGroup}>
          <input
            type='text'
            id='word'
            name='word'
            placeholder='search for any word...'
          />
          <button>
            <img src={search} alt='' />
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputText;
