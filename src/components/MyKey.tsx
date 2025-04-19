// MyKey
'use client'
import styles from '@/style/MyStyle.module.css';
import { useState, useEffect, use } from 'react';
interface MyKeyProps {
    label?: string
    onClicking?: (label: string) => void;
    keyStatus?: string;
}

export default function MyKey ({label, onClicking, keyStatus}: MyKeyProps) {

    const [keyStyle, setKeyStyle] = useState(`${styles.key} ${styles.boxinit}`);

    const txt = label ? label : '?';
    let keyWidth = 30;
    if (label === '⌫') {
        keyWidth = 40;
    } else if  (label == '⏎') {
        keyWidth = 50;
    }

    useEffect(() => {
        if (keyStatus === 'T') {
            setKeyStyle(`${styles.key} ${styles.boxtrue}`);
        } else if (keyStatus === 'C') {
            setKeyStyle(`${styles.key} ${styles.boxcontain}`);
        } else if (keyStatus === 'F') {
            setKeyStyle(`${styles.key} ${styles.boxfalse}`);
        } else { // 'I'
            setKeyStyle(`${styles.key} ${styles.boxinit}`);
        }
    }, [keyStatus]);
    
    return (
        <div className={keyStyle}
        style={{width: `${keyWidth}px`}}
        onClick={() => onClicking && onClicking(label || '')}>
            {txt}
        </div>
    );
}