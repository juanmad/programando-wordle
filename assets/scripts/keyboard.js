import { moveToNextInput, backspacePressed, enterPressed } from "./board.js";

let currentFocusedElement = null;

export const clickedKey = (event) => {
    const key = event.target;
    const letter = key.id.split('-')[1];
    const idPattern = /^input-\d+-\d+$/;
    const currentID = currentFocusedElement.id.split('-');
    
    if (currentFocusedElement && currentFocusedElement.tagName === 'INPUT' && idPattern.test(currentFocusedElement.id)) {
        if (key.id === 'key-BACKSPACE') {
            backspacePressed(currentFocusedElement, +currentID[1], +currentID[2]);
        } else if (key.id === 'key-ENTER') {
            enterPressed();
        } else {
            currentFocusedElement.value = letter; 
            moveToNextInput(+currentID[1], +currentID[2]);
        }
    }

    console.log('Click en:', key.id);
    console.log('Valor:', letter);
};

export const createKeyboard = () => {

    const keyboard = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '\u232B'],
    ]

    // Guardar una referencia al input actualmente en focus
    const handleInputFocus = (event) => {
        currentFocusedElement = event.target;
    };

    const keyboardMatrix = document.getElementById('keyboard');

    document.querySelectorAll('input[id^="input-"]').forEach(input => {
        input.addEventListener('focus', handleInputFocus);
    });

    keyboard.forEach((row, i) => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';

        row.forEach((key, j) => {
            const keyDiv = document.createElement('div');
            keyDiv.className = 'key clicked';
            keyDiv.textContent = key;

            if(key !== '\u232B') {
                keyDiv.id = `key-${key}`;
            } else {
                keyDiv.id = `key-BACKSPACE`;
            }

            keyDiv.tabIndex = -1; // Prevenir que el focus se mueva a este div
            keyDiv.addEventListener('click', clickedKey);
            rowDiv.appendChild(keyDiv);
        });

        keyboardMatrix.appendChild(rowDiv);
    });

};

export const getWord = (rowID) => {
    const word = document.getElementById(rowID).querySelectorAll('.letter');
    const wordArray = [];
    word.forEach((letter) => {
        wordArray.push(letter.value);
    });
    return wordArray.join('');
};