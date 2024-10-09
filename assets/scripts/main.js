import { createWordleBoard } from './wordle.js';
import { createKeyboard } from './keyboard.js';
import { randomSecretWord } from './words.js';


// Initialize the game
createWordleBoard();
createKeyboard();
const secretWord = randomSecretWord();
console.log(secretWord);