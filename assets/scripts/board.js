import { checkWordinArray, checkWordMatch, enableInput, disableInput } from "./gamelogic.js";

export const boardRows = 6;
export const wordLength = 5;
export let activeRow = 0;

export const moveToNextInput = (i, j) => {
    const nextInput = document.getElementById(`input-${i}-${j + 1}`);
    if (nextInput) { // Si existe mover el focus al siguiente input
        nextInput.focus(); 
    }
};

export const moveToPreviousInput = (i, j) => {
    const prevInput = document.getElementById(`input-${i}-${j - 1}`);
    if (prevInput) { // Si existe mover el focus al previo input
        prevInput.focus();
    }
};

export const nextActiveRow = () => {
    activeRow++;
}

export const backspacePressed = (input, i, j) => {
    moveToPreviousInput(i, j);

    if (input.value === '') {
        moveToPreviousInput(i, j);
        const prevInput = document.getElementById(`input-${i}-${j - 1}`);
        prevInput.value = '';
    }
    input.value = '';
};

export const enterPressed = () => {
    if(!checkWordinArray()) {
        alert('Word not in array');
    } else {
        checkWordMatch();
    }
}

export const createWordleBoard = () => {
    const wordleMatrix = document.getElementById('board');

    for (let i = 0; i < boardRows; i++) {
        
        const rowDiv = document.createElement('div');
        rowDiv.className = 'board-row';
        rowDiv.id = `board-row-${i}`;
        
        for (let j = 0; j < wordLength; j++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.id = `input-${i}-${j}`;
            input.className = 'letter';
            input.autocomplete = 'off';
            input.setAttribute('maxlength', '1');
            input.disabled = true;

            input.addEventListener('input', () => {
                // Quitar todos los caracteres que no sean a-z A-Z
                input.value = input.value.replace(/[^a-zA-Z]/g, '');

                if (input.value.length === 1) {
                    moveToNextInput(i, j);
                }
            });

            // Evento keydown para tecla Backspace o Delete
            input.addEventListener('keydown', (event) => {
                if (event.key === 'Backspace') {
                    event.preventDefault();
                    backspacePressed(input, i, j);
                }
            });

            input.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    enterPressed();
                }
            });


            rowDiv.appendChild(input);
        }
        wordleMatrix.appendChild(rowDiv);
    }
    const firstInput = document.getElementById(`input-${activeRow}-${0}`);
    firstInput.focus();
};