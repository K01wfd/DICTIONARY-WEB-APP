import styles from '../../styles/main/translation.module.css';
import { TranslationShape } from '../../interfaces/dictionary';
import play from '../../assets/images/icon-play.svg';
import playActive from '../../assets/images/icone-play-active.svg';
import Details from './Details';

interface Props {
  translation: TranslationShape;
}
function Word({ translation }: Props) {
  const playAudio = () => {
    const audioTranslation = document.getElementById(
      'audio'
    ) as HTMLAudioElement;
    try {
      audioTranslation?.play();
    } catch (err) {
      if (err) return;
    }
  };

  const changePlayButtonIcon = () => {
    let icon = document.getElementById('playIcon') as HTMLImageElement;
    icon?.addEventListener('mouseover', () => {
      icon.src = playActive;
    });
    icon?.addEventListener('mouseout', () => {
      icon.src = play;
    });
  };
  changePlayButtonIcon();
  return (
    <section>
      <div className={styles.translation}>
        {/* WORD PART */}
        {translation.word && (
          <div className={styles.phonetics}>
            <div>
              <h1>{translation.word}</h1>
              <p>{translation.phonetics.text}</p>
            </div>
            <button
              onClick={
                translation.phonetics.audio
                  ? playAudio
                  : () => console.log('no audio src')
              }
            >
              <audio id='audio' src={translation.phonetics.audio}></audio>
              <img id='playIcon' src={play} alt='' />
            </button>
          </div>
        )}
        {/* NOUN PART */}
        {translation.nounMeanings.length > 0 && (
          <Details details={translation.nounMeanings} title='noun' />
        )}
        {translation.verbMeanings.length > 0 && (
          <Details details={translation.verbMeanings} title='verb' />
        )}
        {translation.adjectiveMeaning.length > 0 && (
          <Details details={translation.adjectiveMeaning} title='adjective' />
        )}
      </div>
    </section>
  );
}

export default Word;
