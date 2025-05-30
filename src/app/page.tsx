
'use client'
import MyKeyboard from "@/components/MyKeyboard";
import styles from "@/style/MyStyle.module.css"
import { useEffect, useState } from "react";
import GuessLine from "@/components/GuessLine";
import getRandomWordLength from "@/libs/getRandomWordLength";
import compareString from "@/libs/compareString";
import Loader01 from "@/components/Load01";

type keyStatusMap = { [key: string]: string; }

export default function Home () {

    const emptyString = '     ';
    const [inputText, setInputText] = useState(emptyString);
    const [stringLen, setStringLen] = useState(0);
    const [answer, setAnswer] = useState<string>('');
    const [lines, setLines] = useState<string[]>([]); // Explicit type annotation
    const [statusList, setStatusList] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [innerLoad, setInnerLoad] = useState(false);
    const [win, setWin] = useState(false);

    const initKeyStatus: keyStatusMap = {};
    for (let i = 0; i < 26; i++) {
      const ch = String.fromCharCode(65 + i); // ASCII code for 'A' is 65
      initKeyStatus[ch] = 'I';
    }
    const [keyStatus, setKeyStatus] = useState<keyStatusMap>(initKeyStatus);

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
                for (let i = 0; i < 5; i++) {
                    const ch = inputText.charAt(i);
                    if (resultStatus.charAt(i) === 'T') {
                        setKeyStatus((prev) => ({ ...prev, [ch]: 'T' }));
                    } else if (resultStatus.charAt(i) === 'C') {
                        if (keyStatus[ch] !== 'T') {
                            setKeyStatus((prev) => ({ ...prev, [ch]: 'C' }));
                        }
                    } else {
                        setKeyStatus((prev) => ({ ...prev, [ch]: 'F' }));
                    }
                }
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
        setKeyStatus(initKeyStatus);
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
          {
            win ? <div className="flex justify-center bg-blue-600 cursor-pointer">Congratulation</div>
                 : <div className="flex justify-center">Guess the Word</div>
          }
            {/* <div>Guess the Word</div> */}
            {/* <div>Answer = {answer}</div> */}
            <div className={styles.guessbox}>          
                {
                    Array.from({length:lines.length}).map((_, index) => (
                        <GuessLine key={index} line={lines[index]} lineStatus={statusList[index]} />
                    )) 
                }
                {
                    win? <div className="flex justify-center bg-blue-600 cursor-pointer"
                          onClick={handleWinClick}>new word</div>
                       : <GuessLine line={inputText} />
                }
            </div>
            { innerLoad ? <Loader01 /> : null }
            {/* <input type="text" value={inputText} readOnly className={styles.textarea} /> */}
            {/* <textarea value={inputText} readOnly className={styles.textarea} /> */}
            <MyKeyboard keyClick={handleKeyClick} keyStatuses={keyStatus}/>
        </main>
    );
}