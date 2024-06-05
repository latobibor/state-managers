import './App.css';
import { BuildingManagerOvermind } from './components/overmind-versions/building-manager.tsx';
import { useState } from 'react';
import { BuildingManagerRedux } from './components/redux-versions/building-manager.tsx';

function App() {
    const [storeBrand, setStoreBrand] = useState<string>('overmind');

    return (
        <>
            <h1>State Manager Comparison</h1>
            <nav>
                <menu>
                    <li className={storeBrand === 'overmind' ? 'selected' : ''}><a
                        onClick={() => setStoreBrand('overmind')}>Use Overmind</a></li>
                    <li className={storeBrand === 'redux' ? 'selected' : ''}><a onClick={() => setStoreBrand('redux')}>Use
                        Redux</a></li>
                </menu>
            </nav>

            {storeBrand === 'overmind' && (<BuildingManagerOvermind/>)}
            {storeBrand === 'redux' && (<BuildingManagerRedux/>)}
        </>
    );
}

export default App;
