export const createKeyboard = () => {

    const keyboard = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '\u232B'],
    ]

    // Eventos del teclado al hacer click
    const pressedKey = document.querySelectorAll('.clicked');

    const clickedKey = (event) => {
        const key = event.target;
        console.log('You clicked on:', key.id);
    }

    const keyboardMatrix = document.getElementById('keyboard');

    keyboard.forEach((row, i) => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';

        row.forEach((key, j) => {
            const keyDiv = document.createElement('div');
            keyDiv.className = 'key clicked';
            keyDiv.textContent = key;
            keyDiv.id = `key-${i}-${j}`;
            keyDiv.addEventListener('click', clickedKey);
            rowDiv.appendChild(keyDiv);
        });

        keyboardMatrix.appendChild(rowDiv);
    });

};