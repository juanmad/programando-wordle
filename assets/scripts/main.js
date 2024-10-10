import { createWordleBoard } from './board.js';
import { createKeyboard } from './keyboard.js';
import { getWord } from './keyboard.js';
import { randomSecretWord } from './words.js';


// Initialize the game
createWordleBoard();
createKeyboard();
const secretWord = randomSecretWord();
console.log(secretWord);

// para probar en el inspector de manera global hay que asignar a window para que esté disponible
window.getWord = getWord;
