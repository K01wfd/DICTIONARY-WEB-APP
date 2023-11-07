import styles from '../../styles/main/translation.module.css';
import { Meaning, Phonetics } from '../../interfaces/dictionary';
import { useDictionary } from '../../hooks/useDictionary';
import {
  getWord,
  processNounMeaning,
  processPhonetics,
} from '../../services/processDictinary';
import play from '../../assets/images/icon-play.svg';
import Details from './Details';
import NoDefinition from '../NoDefinition';
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
  let wordShape = {} as WordInterface;
  let noDefinationTrigger = false;
  const { dictionary, isLoading } = useDictionary(word);
  wordShape.word = getWord(dictionary);
  wordShape.phonetic = processPhonetics(dictionary);
  wordShape.nounMeanings = processNounMeaning(dictionary, 'noun');
  wordShape.verbMeanings = processNounMeaning(dictionary, 'verb');
  console.log(dictionary);

  if (word !== wordShape.word) {
    noDefinationTrigger = true;
  }
  if (wordShape.nounMeanings.length === 0) {
    noDefinationTrigger = true;
  }
  return (
    <section className='container'>
      {!isLoading && !noDefinationTrigger ? (
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
            <Details nounPart={wordShape.nounMeanings} title='noun' />
          )}
          {wordShape.verbMeanings.length > 0 && (
            <Details nounPart={wordShape.verbMeanings} title='verb' />
          )}
        </div>
      ) : (
        <NoDefinition />
      )}
    </section>
  );
}

export default Word;
