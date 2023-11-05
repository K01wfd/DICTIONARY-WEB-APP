import { useState } from 'react';
import Header from './components/header/Header';
import InputText from './components/InputText';
import { useWord } from './hooks/useWoed';

export interface DictionaryQuery {
  word: string;
}
function App() {
  const [font, setFont] = useState<string>('sans');
  const [theme, setTheme] = useState('light');
  const [dictionaryQuery, setDictionaryQuery] = useState<DictionaryQuery>(
    {} as DictionaryQuery
  );

  const { dictionary, error } = useWord(dictionaryQuery);
  console.log(
    dictionary?.map((elem) => elem.meanings.map((item) => item.partOfSpeech))
  );
  return (
    <div className={font}>
      <Header
        onThemeChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        onFontSelect={(font) => setFont(font)}
        theme={theme}
      />
      <InputText
        onSearch={(word) => setDictionaryQuery({ ...dictionaryQuery, word })}
      />
    </div>
  );
}

export default App;
