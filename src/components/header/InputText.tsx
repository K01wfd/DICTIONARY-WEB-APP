import { FormEvent, useRef, useState } from 'react';
import search from '../../assets/images/icon-search.svg';
import styles from '../../styles/main/input.module.css';

interface Props {
  onSearch: (searchWord: string) => void;
}
function InputText({ onSearch }: Props) {
  const [inputError, setInputError] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!ref.current?.value) {
      setInputError(true);
    } else if (ref.current?.value) {
      setInputError(false);
      let word = ref.current.value.trim().replace(/\s/g, '').toLowerCase();
      onSearch(word);
    }
  };
  return (
    <div aria-label='Search area'>
      <form action='' onSubmit={handleSubmit}>
        <div className={inputError ? styles.errorGroup : styles.inputGroup}>
          <input
            type='text'
            id='word'
            name='word'
            placeholder='search for any word...'
            ref={ref}
          />
          <button aria-label='Search word button'>
            <img src={search} alt='' />
          </button>
          {inputError && (
            <p className={styles.errorMessage}>Whoops, can&apos;t be empty…</p>
          )}
        </div>
      </form>
    </div>
  );
}

export default InputText;
