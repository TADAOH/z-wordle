import styles from '@/style/MyStyle.module.css'
import Box from './box';

interface GuessProps {
    line?: string;
    lineStatus?: string;
}

export default function GuessLine ({line, lineStatus}: GuessProps) {
    if (line && lineStatus && line.length === lineStatus.length) {
        return (
            <div className={styles.guessline}>
                {
                    Array.from({length:line.length}).map((_, index) => (
                        <Box key={index} label={line[index]} status={lineStatus[index]} />
                    ))
                }
            </div>
        );
    }
    return (
        <div className={styles.guessline}>
            {
                line
                ? line.split('').map((char, index) => (
                    <Box key={index} label={char}/>
                ))
                : Array.from({length:5}).map((_,index) => (
                    <Box key={index}/>
                ))
            }
        </div>
    );
}