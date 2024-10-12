import { createWordleBoard } from './board.js';
import { createKeyboard } from './keyboard.js';
import { getWord } from './keyboard.js';
import { randomSecretWord } from './words.js';
import { enableInput } from './gamelogic.js';


// Initialize the game
createWordleBoard();
createKeyboard();

// para probar en el inspector de manera global hay que asignar a window para que esté disponible
window.getWord = getWord;
enableInput();


import { wordsArray } from './words.js';
import { wordsArraySorted } from './words.js';

window.wordsArray = wordsArray;

window.wordsArraySorted = wordsArraySorted;

console.log('wordsArray:', wordsArray);
console.log('wordsArraySorted:', wordsArraySorted);
