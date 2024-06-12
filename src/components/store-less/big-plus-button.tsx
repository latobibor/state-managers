import './big-plus-button.scss';

interface BigPlusButtonProps {
  onClick: () => void;
}

export function BigPlusButton({ onClick }: BigPlusButtonProps): JSX.Element {
  return <button className="accent big-plus-button" onClick={onClick}>+</button>;
}