import { useState } from 'react';
import Header from './components/header/Header';
import InputText from './components/InputText';

interface Dictionary {
  font: string;
}

function App() {
  const [dictionary, setDictionary] = useState<Dictionary>({
    font: 'sans',
  } as Dictionary);
  const [theme, setTheme] = useState('light');

  return (
    <div className={dictionary.font}>
      <Header
        onThemeChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        theme={theme}
      />
      <InputText />
    </div>
  );
}

export default App;
