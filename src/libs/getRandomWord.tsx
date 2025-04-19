export default async function getRandomWord () {
    const url = `https://random-word-api.vercel.app/api?words=1&cacheBuster=${Date.now()}`;
    const option = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await fetch(url, option);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data = await res.json();
        console.log(`got ${data[0]}`);
        return data[0];
    } catch (error) {
        console.log("Error fecthing random word:", error);
        return null;
    }
}