export const createWordleBoard = () => {

    const wordleMatrix = document.getElementById('wordle-container');

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.id = 'a' + i + j;
            input.className = 'letter';
            input.autocomplete = 'off';
            input.setAttribute('maxlength', '1');

            wordleMatrix.appendChild(input);
        }
    }

}