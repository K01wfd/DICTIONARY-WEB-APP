import styles from '../../styles/main/translation.module.css';
import { TranslationShape } from '../../interfaces/dictionary';
import play from '../../assets/images/icon-play.svg';
import Details from './Details';
import NoDefinition from '../NoDefinition';

interface Props {
  translation: TranslationShape;
  isLoading: boolean;
  error: string;
}
function Word({ translation, isLoading, error }: Props) {
  if (error) return <NoDefinition />;
  return (
    <section className='container'>
      {isLoading && <div>Loading</div>}
      {!isLoading && (
        <div className={styles.translation}>
          {/* WORD PART */}
          <div className={styles.phonetics}>
            <div>
              <h1>{translation.word}</h1>
              <p>{translation.phonetics.text}</p>
            </div>
            <button>
              <img src={play} alt='play button' />
            </button>
          </div>
          {/* NOUN PART */}
          {translation.nounMeanings.length > 0 && (
            <Details details={translation.nounMeanings} title='noun' />
          )}
          {translation.verbMeanings.length > 0 && (
            <Details details={translation.verbMeanings} title='verb' />
          )}
        </div>
      )}
    </section>
  );
}

export default Word;
