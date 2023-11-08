import { useState } from 'react';
import Header from './components/header/Header';
import RestOfContent from './components/RestOfContent';
import { useDictionary } from './hooks/useDictionary';
import { getDictionaryData } from './services/proccessDictionary';

function App() {
  const [font, setFont] = useState<string>('sans');
  const [theme, setTheme] = useState<string>('light');
  const [word, setWord] = useState<string>('');
  const { dictionary, isLoading, error } = useDictionary(word);
  const translation = getDictionaryData(dictionary);
  console.log(dictionary);
  return (
    <div className={`${font} container`}>
      <Header
        onThemeChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        onFontSelect={(font) => setFont(font)}
        theme={theme}
      />
      {
        <RestOfContent
          word={word}
          onSearch={(searchord) => setWord(searchord)}
          translation={translation}
          isLoading={isLoading}
          error={error}
        />
      }
    </div>
  );
}

export default App;
