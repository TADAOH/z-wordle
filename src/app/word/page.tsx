import getRandomWord from "../../libs/getRandomWord";
import getRandomWordLength from "@/libs/getRandomWordLength";

export default async function Word() {
  // const word = await getRandomWord();
  const word = await getRandomWordLength(5);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>word page</div>
      <div>{word}</div>
    </main>
  );
}