import { useState } from 'react';
import Header from './components/header/Header';
import InputText from './components/InputText';
import Translation from './components/main/Translation';

function App() {
  const [font, setFont] = useState('sans');
  const [theme, setTheme] = useState('light');
  const [word, setWord] = useState<string>('');
  return (
    <div className={font}>
      <Header
        onThemeChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        onFontSelect={(font) => setFont(font)}
        theme={theme}
      />
      <main>
        <InputText onSearch={(word) => setWord(word)} />
        {word && <Translation word={word} />}
      </main>
    </div>
  );
}

export default App;
