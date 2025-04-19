import styles from '@/style/Keyboard.module.css'
import Keyboard from "@/components/Keyboard";
export default async function About() {

  return (
    <main>
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>My Keyboard</h1>
        <Keyboard />
      </main>
    </div>
    </main>
  );
}