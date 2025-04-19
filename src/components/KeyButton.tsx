//KeyButton.tsx
import styles from '@/style/KeyButton.module.css';

interface KeyButtonProps {
  label: string;
  onClick: (label: string) => void;
}

export default function MyKey({ label, onClick }: KeyButtonProps) {
  let keyWidth = 60;
  if (label === 'Space') {
    keyWidth = 255;
  } else if (label === '\u2190' || label === '\u2192') {
    keyWidth = 105;
  } else if (label === '123') {
    keyWidth = 70;
  } else if (label === '🡅' || label === '⌫' || label === '◍') {
    keyWidth = 100;
  }

  if (label) {
    return (
      <div
        className={styles.keyButton}
        style={{ width: `${keyWidth}px` }}
        onClick={() => onClick(label)}
      >
        {label}
      </div>
    );
  }
  return null;
}