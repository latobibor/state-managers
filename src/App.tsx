import './App.css';
import { BuildingManagerOvermind } from './components/overmind-versions/building-manager.tsx';
import { useState } from 'react';
import { BuildingManagerRedux } from './components/redux-versions/building-manager.tsx';

function App() {
  const [storeVersion, setStoreVersion] = useState<string>('overmind');

  return (
    <>
      {storeVersion === 'overmind' && (<BuildingManagerOvermind/>)}
      {storeVersion === 'redux' && (<BuildingManagerRedux/>)}
      <button onClick={() => setStoreVersion('overmind')}>Use Overmind</button>
      <button onClick={() => setStoreVersion('redux')}>Use Redux</button>
    </>
  );
}

export default App;
