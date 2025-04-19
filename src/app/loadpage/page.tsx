import styles from '@/style/MyStyle.module.css'
import Loader01 from "@/components/Load01";
import Load02 from '@/components/Load02';
import Load03 from '@/components/Load03';
import LoadWord from '@/components/LoadWord';
export default function LoadPage () {
    return (
        <main className={styles.page}>
            {/* <Load03/> */}
            <LoadWord/>
        </main>
    );
}
/* "ctrl + I" to ask*/