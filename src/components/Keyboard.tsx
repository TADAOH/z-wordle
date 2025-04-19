//Keyboard.tsx
'use client'
import styles from '@/style/Keyboard.module.css';
import KeyButton from './KeyButton';
import { useState } from 'react';

function Keyboard() {
  const upArrow = '🡅';
  const del = '⌫';
  const left = '\u2190';
  const right = '\u2192';
  const globe = '◍';

  const [inputText, setInputText] = useState('');

  const handleKeyClick = (label: string) => {
    if (label === '⌫') { // Backspace
      setInputText((prevText) => prevText.slice(0, -1));
    } else if (label === 'Space') {
      setInputText((prevText) => prevText + ' ');
    } else {
      setInputText((prevText) => prevText + label);
    }
  };

  return (
    <div className={styles.baseboard}>
      <input type="text" value={inputText} readOnly className={styles.textBox} />
      <div className={styles.line}>
        <KeyButton label="Q" onClick={handleKeyClick} />
        <KeyButton label="W" onClick={handleKeyClick} />
        <KeyButton label="E" onClick={handleKeyClick} />
        <KeyButton label="R" onClick={handleKeyClick} />
        <KeyButton label="T" onClick={handleKeyClick} />
        <KeyButton label="Y" onClick={handleKeyClick} />
        <KeyButton label="U" onClick={handleKeyClick} />
        <KeyButton label="I" onClick={handleKeyClick} />
        <KeyButton label="O" onClick={handleKeyClick} />
        <KeyButton label="P" onClick={handleKeyClick} />
      </div>
      <div className={styles.line}>
        <KeyButton label="A" onClick={handleKeyClick} />
        <KeyButton label="S" onClick={handleKeyClick} />
        <KeyButton label="D" onClick={handleKeyClick} />
        <KeyButton label="F" onClick={handleKeyClick} />
        <KeyButton label="G" onClick={handleKeyClick} />
        <KeyButton label="H" onClick={handleKeyClick} />
        <KeyButton label="J" onClick={handleKeyClick} />
        <KeyButton label="K" onClick={handleKeyClick} />
        <KeyButton label="L" onClick={handleKeyClick} />
      </div>
      <div className={styles.line}>
        <KeyButton label={upArrow} onClick={handleKeyClick} />
        <KeyButton label="Z" onClick={handleKeyClick} />
        <KeyButton label="X" onClick={handleKeyClick} />
        <KeyButton label="C" onClick={handleKeyClick} />
        <KeyButton label="V" onClick={handleKeyClick} />
        <KeyButton label="B" onClick={handleKeyClick} />
        <KeyButton label="N" onClick={handleKeyClick} />
        <KeyButton label="M" onClick={handleKeyClick} />
        <KeyButton label={del} onClick={handleKeyClick} />
      </div>
      <div className={styles.line}>
        <KeyButton label="123" onClick={handleKeyClick} />
        <KeyButton label={globe} onClick={handleKeyClick} />
        <KeyButton label="?" onClick={handleKeyClick} />
        <KeyButton label="Space" onClick={handleKeyClick} />
        <KeyButton label={left} onClick={handleKeyClick} />
        <KeyButton label={right} onClick={handleKeyClick} />
      </div>
    </div>
  );
}

export default Keyboard;