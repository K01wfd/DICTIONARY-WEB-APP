import { useState } from 'react';
import Header from './components/header/Header';
import InputText from './components/header/InputText';

interface Dictionary {
  font: string;
}

function App() {
  const [dictionary, setDictionary] = useState<Dictionary>({
    font: 'sans',
  } as Dictionary);

  return (
    <div className={dictionary.font}>
      <Header />
      <InputText />
    </div>
  );
}

export default App;
