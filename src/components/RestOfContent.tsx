import { TranslationShape } from '../interfaces/dictionary';
import NoDefinition from './NoDefinition';
import Footer from './footer/Footer';
import InputText from './main/InputText';
import Translation from './main/Translation';

interface Props {
  onSearch: (searchWord: string) => void;
  translation: TranslationShape;
  isLoading: boolean;
  error: string;
  word: string;
}
function RestOfContent({
  word,
  onSearch,
  translation,
  isLoading,
  error,
}: Props) {
  return (
    <>
      {!error ? (
        <main>
          <InputText onSearch={onSearch} />
          {word && !isLoading ? (
            <Translation translation={translation} />
          ) : null}
        </main>
      ) : (
        <NoDefinition />
      )}

      {!isLoading && !error ? (
        <footer>{word && <Footer url={translation.sourceUrl} />}</footer>
      ) : null}
    </>
  );
}

export default RestOfContent;
