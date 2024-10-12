import { getWord } from './keyboard.js';
import { words, randomSecretWord } from './words.js';

import { boardRows, wordLength, nextActiveRow, activeRow } from './board.js';

const secretWord = randomSecretWord();
console.log('secretWord:', secretWord);


export const enableInput = () => {
    for (let i = 0; i < wordLength; i++) {
        const input = document.getElementById(`input-${activeRow}-${i}`);
        input.disabled = false;
    }
}

export const disableInput = () => {
    for (let i = 0; i < wordLength; i++) {
        const input = document.getElementById(`input-${activeRow}-${i}`);
        input.disabled = true;
    }
}

export const checkWordinArray = () => {
    const word = getWord(`board-row-${activeRow}`);
    console.log('Word:', typeof word, word);
    if (words.includes(word)) {
        console.log('word in array');
        return true;
    } else {
        console.log('word not in array');
        return false;
    }
}

export const wordMatches = () => {
    let match = 0;
    const word = getWord(`board-row-${activeRow}`).split('');
    console.log('wordMatches:', word);

    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() !== secretWord[i].toLowerCase()) {
            match++;
        }
    }

    console.log('match:', match);
    return match === 0;
}

export const checkWordMatch = () => {
    const word = getWord(`board-row-${activeRow}`).split('');
    console.log('checkWordMatch:', word);

    if (wordMatches()) {
        console.log('word matches');
        for (let i = 0; i < wordLength; i++) {
            const input = document.getElementById(`input-${activeRow}-${i}`);
            input.style.backgroundColor = '#538d4e';
            input.style.borderColor = '#538d4e';
        }
    } else {
        console.log('word does not match');

        word.forEach((letter, i) => {
            const input = document.getElementById(`input-${activeRow}-${i}`);
            if (letter.toLowerCase() === secretWord[i].toLowerCase()) {
                console.log("Y", letter, 'pos:', i);
                input.style.backgroundColor = '#538d4e';
                input.style.borderColor = '#538d4e';
            } else if (secretWord.includes(letter)) {
                console.log("N", letter, 'pos:', i);
                input.style.backgroundColor = '#b59f3b';
                input.style.borderColor = '#b59f3b';
            } else {
                input.style.backgroundColor = '#3a3a3c';
                input.style.borderColor = '#3a3a3c';
            }

        });
    }
    disableInput();
    nextActiveRow();
    enableInput();
    const nextInput = document.getElementById(`input-${activeRow}-${0}`);
    nextInput.focus();
}
