import { useState } from 'react';

import './App.scss';

import { BuildingManagerOvermind } from './components/overmind-versions/building-manager.tsx';
import { BuildingManagerRedux } from './components/redux-versions/building-manager.tsx';
import { Navigation } from './components/store-less/navigation.tsx';

function App() {
  const [storeBrand, setStoreBrand] = useState<string>('overmind');

  return (
    <>
      <Navigation storeBrand={storeBrand} setStoreBrand={setStoreBrand}/>
      <main className="main-container">
        {storeBrand === 'overmind' && (<BuildingManagerOvermind/>)}
        {storeBrand === 'redux' && (<BuildingManagerRedux/>)}
      </main>
    </>
  );
}

export default App;
