import { TranslationShape } from '../interfaces/dictionary';
import Loader from './Loader';
import NoDefinition from './NoDefinition';
import Footer from './footer/Footer';
import Translation from './main/Translation';

interface Props {
  translation: TranslationShape;
  isLoading: boolean;
  error: string;
  word: string;
}
function RestOfContent({ word, translation, isLoading, error }: Props) {
  if (error) return <NoDefinition />;
  if (isLoading) return <Loader />;
  return (
    <>
      <main>{word && <Translation translation={translation} />}</main>
      {word && (
        <footer>
          <Footer url={translation.sourceUrl} />
        </footer>
      )}
    </>
  );
}

export default RestOfContent;
