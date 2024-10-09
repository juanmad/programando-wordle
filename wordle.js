const wordleMatrix = document.getElementById('wordle-container');

for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'a'+i+j;
        input.className = 'letter';
        input.autocomplete = 'off';
        input.setAttribute('maxlength', '1');

        wordleMatrix.appendChild(input);
    }
}

const keyboard = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '\u232B'],
]

const keyboardMatrix = document.getElementById('keyboard');

keyboard.forEach((row, i) => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'keyboard-row';

    row.forEach((key, j) => {
        const keyDiv = document.createElement('div');
        keyDiv.className = 'key';
        keyDiv.textContent = key;
        keyDiv.id = `key-${i}-${j}`;
        rowDiv.appendChild(keyDiv);
    });

    keyboardMatrix.appendChild(rowDiv);
});

const words = [
    "mundo",
    "cielo",
    "fruta",
    "plato",
    "silla",
    "perro",
    "nubes",
    "piano",
    "corso",
    "fuego",
    "salas",
    "lomos",
    "canto",
    "viento",
    "pacto",
    "hojas",
    "barco",
    "jugar",
    "pesca",
    "cuero",
    "suelo",
    "olivo",
    "carne",
    "hueso",
    "cable",
    "pieza",
  ];
  
const wordsSplit = words.map(word => word.split(''));

const randomSecretWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsSplit.length);
    return wordsSplit[randomIndex];
  };

const secretWord = randomSecretWord();
console.log(secretWord);