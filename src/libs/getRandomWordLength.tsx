import { wordPool } from "./wordPool";
export default async function getRandomWordLength (len: number): Promise<string> {
    const url = `https://random-word-api.vercel.app/api?words=1&length=5&cacheBuster=${Date.now()}`;
    const option = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    };

    console.log("call get word")

    try {
        const res = await fetch(url, option);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data = await res.json();
        console.log(`random word is: ${data[0]}`);
        return data[0].toUpperCase();
    } catch (error) {
        console.log("Error fecthing random word:", error);
        const randomIndex = Math.floor(Math.random() * wordPool.length);
        return wordPool[randomIndex].toUpperCase();
    }
}