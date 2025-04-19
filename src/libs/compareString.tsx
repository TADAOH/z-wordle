export default function compareString(guess:string, answer:string) {
    if (!answer || !guess || guess.length !== answer.length) {
        return "FFFFF";
    } 
    if (guess === answer) {
        return "TTTTT";
    }
    let guessChars = guess.split('');
    let answerChars = answer.split('');
    let status = ['F', 'F', 'F', 'F', 'F'];
    for (let i=0; i<answer.length; i++) {
        if (guessChars[i] === answerChars[i]) {
            status[i] = 'T';
            guessChars[i] = '*';
            answerChars[i] ='#';
        }
    }
    for (let i=0; i<answer.length; i++) {
        if (status[i] !== 'T') {
            const ansIndex = answerChars.indexOf(guess[i]);
            if (ansIndex !== -1) {
                status[i] = 'C';
                answerChars[ansIndex] = '#';
            }
        }
    }
    return status.join('');
}