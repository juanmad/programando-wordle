const boardRows = 6;
const wordLength = 5;

const moveToNextInput = (i, j) => {
    const nextInput = document.getElementById(`a${i}${j + 1}`);
    if (nextInput) { // Si existe mover el focus al siguiente input
        nextInput.focus(); 
    }
};

const moveToPreviousInput = (i, j) => {
    const prevInput = document.getElementById(`a${i}${j - 1}`);
    if (prevInput) { // Si existe mover el focus al previo input
        prevInput.focus();
    }
};

export const createWordleBoard = () => {
    const wordleMatrix = document.getElementById('board');

    for (let i = 0; i < boardRows; i++) {
        
        const rowDiv = document.createElement('div');
        rowDiv.className = 'board-row';
        rowDiv.id = 'board-row-${i}';
        
        
        for (let j = 0; j < wordLength; j++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.id = 'a' + i + j;
            input.className = 'letter';
            input.autocomplete = 'off';
            input.setAttribute('maxlength', '1');

            input.addEventListener('input', (event) => {
                const character = event.target.value;
                if (character.length === 1) {
                    moveToNextInput(i, j);
                }
            });

            // Evento keydown para tecla Backspace o Delete
            input.addEventListener('keydown', (event) => {
                if (event.key === 'Backspace') {
                    event.preventDefault();
                    input.value = '';
                    moveToPreviousInput(i, j);
                }
            });

            rowDiv.appendChild(input);
        }
        wordleMatrix.appendChild(rowDiv);
    }
};