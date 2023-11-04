import { useState } from 'react';

interface Dictionary {
  font: string;
}

function App() {
  const [dictionary, setDictionary] = useState<Dictionary>({
    font: 'mono',
  } as Dictionary);

  return <div className={dictionary.font}>heloo</div>;
}

export default App;
