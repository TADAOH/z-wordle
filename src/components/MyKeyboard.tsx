// MyKeyboard
'use client'
import styles from "@/style/MyStyle.module.css"
import MyKey from "./MyKey";

type keyStatusMap = { [key: string]: string; }

interface MyKeyboardProbs {
    keyClick?: (label:string) => void;
    keyStatuses?: keyStatusMap;
}

export default function MyKeyboard ({keyClick, keyStatuses}: MyKeyboardProbs) {
    const del = '⌫';
    const enter = '⏎';
    const left = '←';
    const right = '→';

    const Line1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const Line2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const Line3 = [del, 'Z', 'X', 'C', 'V', 'B', 'N', 'M', enter];

    const getStatus = (key: string) => {
        if (keyStatuses && keyStatuses[key]) {
            return keyStatuses[key];
        }
        return 'I';
    }

    return (
        <div className={styles.board}>
            <div className={styles.line}>
                {
                    Line1.map((key, index) => (
                        <MyKey key={index} label={key} onClicking={keyClick} keyStatus={getStatus(key)} />
                    ))
                }
            </div>
            <div className={styles.line}>
                {
                    Line2.map((key, index) => (
                        <MyKey key={index} label={key} onClicking={keyClick} keyStatus={getStatus(key)} />
                    ))
                }
            </div>
            <div className={styles.line}>
                {
                    Line3.map((key, index) => (
                        <MyKey key={index} label={key} onClicking={keyClick} keyStatus={getStatus(key)} />
                    ))
                }
            </div>
        </div>
    );
}