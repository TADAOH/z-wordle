// Loader.tsx
import React from 'react';
import styles from '@/style/LoadWord.module.css';
// import wordImage from './word.png'; // Import your word.png image

const LoadWord: React.FC = () => {
    const wordImage = '/word.png';
  return (
    <div className={styles.loader}>
      <img src={wordImage} alt="Loading" className={styles.wordImage} />
      <div className={styles.road}></div>
    </div>
  );
};

export default LoadWord;