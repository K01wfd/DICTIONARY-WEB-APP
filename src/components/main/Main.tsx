import { TranslationShape } from '../../interfaces/dictionary';
import InputText from './InputText';
import Translation from './Translation';

interface Props {
  onSearch: (searchWord: string) => void;
  translation: TranslationShape;
  isLoading: boolean;
  error: string;
  word: string;
}
function Main({ word, onSearch, translation, isLoading, error }: Props) {
  return (
    <main>
      <InputText onSearch={onSearch} />
      {word && (
        <Translation
          translation={translation}
          isLoading={isLoading}
          error={error}
        />
      )}
    </main>
  );
}

export default Main;
