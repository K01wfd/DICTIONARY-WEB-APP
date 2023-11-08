import { FormEvent, useRef } from 'react';
import search from '../../assets/images/icon-search.svg';
import styles from '../../styles/main/input.module.css';

interface Props {
  onSearch: (searchWord: string) => void;
}
function InputText({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (ref.current?.value) {
      let word = ref.current.value.trim().replace(/\s/g, '').toLowerCase();
      onSearch(word);
      ref.current.value = '';
    }
  };
  return (
    <div className='container'>
      <form action='' onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type='text'
            id='word'
            name='word'
            placeholder='search for any word...'
            ref={ref}
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
