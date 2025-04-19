import styles from '@/style/Keyboard.module.css'
import Keyboard from '@/components/Keyboard';

export default async function About() {

  return (
      <main className={styles.main}>
        <>
        <div>Keyboard</div>
        <Keyboard />
        {/* <MyKeyboard /> */}
        </>
      </main>
  );
}