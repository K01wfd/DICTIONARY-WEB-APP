import { useState } from 'react';
import Header from './components/header/Header';

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
    </div>
  );
}

export default App;
