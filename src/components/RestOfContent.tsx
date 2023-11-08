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
  if (error) return <NoDefinition />;
  return (
    <>
      <main>
        <InputText onSearch={onSearch} />
        {word && !isLoading ? <Translation translation={translation} /> : null}
      </main>

      {!isLoading && (
        <footer>{word && <Footer url={translation.sourceUrl} />}</footer>
      )}
    </>
  );
}

export default RestOfContent;
