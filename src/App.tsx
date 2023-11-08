import { useState } from 'react';
import Header from './components/header/Header';
import Translation from './components/main/Translation';
import Main from './components/main/Main';
import { useDictionary } from './hooks/useDictionary';
import { getDictionaryData } from './services/proccessDictionary';

function App() {
  const [font, setFont] = useState<string>('sans');
  const [theme, setTheme] = useState<string>('light');
  const [word, setWord] = useState<string>('');
  const { dictionary, isLoading, error } = useDictionary(word);
  const translation = getDictionaryData(dictionary);
  console.log(dictionary);
  console.log(translation);
  return (
    <div className={font}>
      <Header
        onThemeChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        onFontSelect={(font) => setFont(font)}
        theme={theme}
      />
      {
        <Main
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
