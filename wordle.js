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

keyboard.forEach((row) => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'keyboard-row';

    row.forEach((key) => {
        const keyDiv = document.createElement('div');
        keyDiv.className = 'key';
        keyDiv.textContent = key;
        rowDiv.appendChild(keyDiv);
    });

    keyboardMatrix.appendChild(rowDiv);
});