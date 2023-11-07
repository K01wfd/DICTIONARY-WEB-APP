import styles from '../../styles/main/translation.module.css';
import { Meaning, Phonetics } from '../../interfaces/dictionary';
import { useDictionary } from '../../hooks/useDictionary';
import {
  getWord,
  processMeanings,
  processPhonetics,
} from '../../services/processDictinary';
import play from '../../assets/images/icon-play.svg';
import Details from './Details';
import NoDefinition from '../NoDefinition';
import Error from '../Error';
interface WordInterface {
  word: string;
  phonetic: Phonetics;
  nounMeanings: Meaning[];
  verbMeanings: Meaning[];
  adjectiveMeaning: Meaning[];
}
interface Props {
  word: string;
}
function Word({ word }: Props) {
  let wordShape = {} as WordInterface; // object shape to display
  let noDefinationTrigger = false;
  const { dictionary, isLoading, error } = useDictionary(word);
  wordShape.word = getWord(dictionary);
  wordShape.phonetic = processPhonetics(dictionary);
  wordShape.nounMeanings = processMeanings(dictionary, 'noun');
  wordShape.verbMeanings = processMeanings(dictionary, 'verb');
  console.log(dictionary);

  if (word !== wordShape.word) {
    noDefinationTrigger = true;
  }
  if (wordShape.nounMeanings.length === 0) {
    noDefinationTrigger = true;
  }

  if (noDefinationTrigger) return <NoDefinition />;
  if (error) return <Error />;
  return (
    <section className='container'>
      {!isLoading && (
        <div className={styles.translation}>
          {/* WORD PART */}
          <div className={styles.phonetics}>
            <div>
              <h1>{wordShape.word}</h1>
              <p>{wordShape.phonetic.text}</p>
            </div>
            <button>
              <img src={play} alt='play button' />
            </button>
          </div>
          {/* NOUN PART */}
          {wordShape.nounMeanings.length > 0 && (
            <Details details={wordShape.nounMeanings} title='noun' />
          )}
          {wordShape.verbMeanings.length > 0 && (
            <Details details={wordShape.verbMeanings} title='verb' />
          )}
        </div>
      )}
    </section>
  );
}

export default Word;
