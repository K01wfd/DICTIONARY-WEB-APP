import { useState } from 'react';
import Header from './components/header/Header';
import InputText from './components/InputText';
import { useDictionary } from './hooks/useDictionary';

function App() {
  const [font, setFont] = useState<string>('sans');
  const [theme, setTheme] = useState('light');
  const { dictionary, error } = useDictionary('keyboard');

  console.log(dictionary?.map((item) => item.sourceUrls));
  return (
    <div className={font}>
      <Header
        onThemeChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        onFontSelect={(font) => setFont(font)}
        theme={theme}
      />
      <InputText />
    </div>
  );
}

export default App;
