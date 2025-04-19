import styles from '@/style/MyStyle.module.css'

interface BoxProps {
    label?: string;
    status?: string;
}

export default function Box ({label, status}: BoxProps) {
    if (!label) {
        label = '?';
    }
    let boxStyle = styles.box;
    if (status === 'T') {
        boxStyle = `${boxStyle} ${styles.boxtrue}`;
    } else if (status === 'C') {
        boxStyle = `${boxStyle} ${styles.boxcontain}`;
    } else if (status === 'F') {
        boxStyle = `${boxStyle} ${styles.boxfalse}`;
    } else { // 'I'
        boxStyle = `${boxStyle} ${styles.boxinit}`;
    }
    return (
        <div className={boxStyle}>{label}</div>
    );
}