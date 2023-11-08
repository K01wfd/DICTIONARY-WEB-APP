import styles from '../../styles/main/details.module.css';
import { Meaning } from '../../interfaces/dictionary';

interface Props {
  details: Meaning[];
  title: string;
}
function Details({ details, title }: Props) {
  return (
    <div className={styles.noun}>
      <div className={styles.nounTitle}>
        <h2>{title}</h2>
        <div className='horizontalDevider'></div>
      </div>

      <p className={styles.meaning}>Meaning</p>
      <ul className={styles.meaningsList}>
        {details.map(
          (data, i) =>
            i < 1 &&
            data.definitions.map(
              (def, i) =>
                i < 4 && (
                  <li key={def.definition}>
                    {def.definition}
                    {def.example && (
                      <p
                        role='listitem'
                        className={styles.example}
                        key={def.example}
                      >
                        &quot;
                        {def.example}
                        &quot;
                      </p>
                    )}
                  </li>
                )
            )
        )}
      </ul>
      <div className={styles.synon}>
        {details.map(
          (data, i) =>
            i < 1 && (
              <div key={'syno' + i}>
                <p>Synonyms</p>
                {data.synonyms.length > 0 ? (
                  data.synonyms.map(
                    (syno, i) => i < 3 && <span key={syno + i}>{syno} </span>
                  )
                ) : (
                  <span className={styles.notFoundSyno}>not found</span>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Details;
