import './navigation.scss';

interface NavigationProps {
  storeBrand: string;
  setStoreBrand: (brand: string) => void;
}

export function Navigation({ storeBrand, setStoreBrand }: NavigationProps) {
  return <header className="navigation">
    <div className="navigation__controls">
      <h1 className="navigation__controls-title">State Manager Comparison</h1>
      <nav aria-label="Selectable tabs for switching between store brands.">
        <menu>
          <li className={storeBrand === 'overmind' ? 'selected' : ''}>
            <a onClick={() => setStoreBrand('overmind')}>Overmind</a>
          </li>
          <li className={storeBrand === 'redux' ? 'selected' : ''}>
            <a onClick={() => setStoreBrand('redux')}>Redux</a>
          </li>
        </menu>
      </nav>
    </div>
  </header>;
}