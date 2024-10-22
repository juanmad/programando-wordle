import { getWord, clickedKey } from './keyboard.js';
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
    const word = getWord(`board-row-${activeRow}`).split('');
    return word.every((letter, i) => letter.toLowerCase() === secretWord[i].toLowerCase());
}

export const checkWordMatch = () => {
    const word = getWord(`board-row-${activeRow}`).split('');
    console.log('checkWordMatch:', word);

    const letterCount = {};
    secretWord.forEach(letter => {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    });

    if (wordMatches()) {
        console.log('word matches');
        word.forEach((_, i) => {
            const input = document.getElementById(`input-${activeRow}-${i}`);
            input.style.backgroundColor = '#538d4e';
            input.style.borderColor = '#538d4e';
        });
    } else {
        console.log('word does not match');

        word.forEach((letter, i) => {
            const input = document.getElementById(`input-${activeRow}-${i}`);
            const key = document.getElementById(`key-${letter.toUpperCase()}`);

            if (letter.toLowerCase() === secretWord[i].toLowerCase()) {
                input.style.backgroundColor = '#538d4e'; // Verde
                input.style.borderColor = '#538d4e';
                letterCount[letter]--; // Decrementar count para la letra encontrada
            } else if (secretWord.includes(letter) && letterCount[letter] > 0) {
                input.style.backgroundColor = '#b59f3b'; // Amarillo
                input.style.borderColor = '#b59f3b';
                key.style.backgroundColor = '#b59f3b';
                letterCount[letter]--; // Decrementar count para la letra encontrada
            } else {
                input.style.backgroundColor = '#3a3a3c'; // Gris
                input.style.borderColor = '#3a3a3c';
                key.style.backgroundColor = '#303030'; // Gris oscuro
                key.classList.add('disabled'); // Agregar clase disabled
                key.removeEventListener('click', clickedKey); // Quitar el event listener
            }
        });
    }
    
    disableInput();
    nextActiveRow();
    enableInput();
    const nextInput = document.getElementById(`input-${activeRow}-${0}`);
    nextInput.focus();
}
