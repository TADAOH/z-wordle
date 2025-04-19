
'use client'
import MyKeyboard from "@/components/MyKeyboard";
import styles from "@/style/MyStyle.module.css"
import { useEffect, useState } from "react";
import GuessLine from "@/components/GuessLine";
import getRandomWordLength from "@/libs/getRandomWordLength";
import compareString from "@/libs/compareString";
import Loader01 from "@/components/Load01";


export default function MyKeyboardPage () {

    const emptyString = '     ';
    const [inputText, setInputText] = useState(emptyString);
    const [stringLen, setStringLen] = useState(0);
    const [answer, setAnswer] = useState<string>('');
    const [lines, setLines] = useState<string[]>([]); // Explicit type annotation
    const [statusList, setStatusList] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [innerLoad, setInnerLoad] = useState(false);
    const [win, setWin] = useState(false);

    useEffect(() => {
        async function fetchAnswer() {
            const ans = await getRandomWordLength(5);
            setAnswer(ans);
            setLoading(false);
        }
        fetchAnswer();
    }, []);

    const handleKeyClick = (label:string) => {
        if (label === '⌫') {
            if (stringLen > 0) {
                setInputText((prevText) => {
                    const newText = prevText.slice(0, stringLen-1) + ' ' + prevText.slice(stringLen);
                    return newText;
                });
                setStringLen((prev) => prev-1);
            }
        } else if (label === '⏎') {
            if (stringLen === 5) {
                const resultStatus = compareString(inputText, answer);
                setLines((prev) => [...prev, inputText]);
                setStatusList((prev) => [...prev, resultStatus]);
                // setLines((prev) => [...prev, resultStatus]);
                setInputText(emptyString);
                setStringLen(0);
                if (resultStatus === 'TTTTT') {
                    setWin(true);
                }
            }
        } else {
            if (stringLen < 5) {
                setInputText((prevText) => {
                    const newText = prevText.slice(0, stringLen) + label + prevText.slice(stringLen + 1);
                    return newText;
                });
                setStringLen((prev) => prev+1);
            }
        }
    };

    const handleWinClick = () => {
        // setLoading(true);
        setInnerLoad(true);
        setInputText(emptyString);
        setStringLen(0);
        setLines([]);
        setStatusList([]);
        setWin(false);
        async function fetchAnswer() {
          const ans = await getRandomWordLength(5);
          setAnswer(ans);
        //   setLoading(false);
          setInnerLoad(false);
        }
        fetchAnswer();
      };

    if (loading) {
        // return <div className="flex justify-center">Loading...</div>;
        return <div className={styles.page}> <Loader01 /> </div>;
    }  

    return (
        <main className={styles.page}>
            <div>My Keyboard Page</div>
            <div>Answer = {answer}</div>
            <div className={styles.guessbox}>
                {/* {
                    lines? lines.map((line, index) => (
                        <GuessLine key={index} line={line} />
                    )) : null
                } */}
                {
                    Array.from({length:lines.length}).map((_, index) => (
                        <GuessLine key={index} line={lines[index]} lineStatus={statusList[index]} />
                    )) 
                }
                {
                    win? <div className="flex justify-center bg-blue-600"
                          onClick={handleWinClick}>You Win</div>
                       : <GuessLine line={inputText} />
                }
            </div>
            { innerLoad ? <Loader01 /> : null }
            {/* <input type="text" value={inputText} readOnly className={styles.textarea} /> */}
            {/* <textarea value={inputText} readOnly className={styles.textarea} /> */}
            <MyKeyboard keyClick={handleKeyClick}/>
        </main>
    );
}