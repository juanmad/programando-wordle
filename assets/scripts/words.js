// export const words = [
//     "mundo",
//     "cielo",
//     "fruta",
//     "plato",
//     "silla",
//     "perro",
//     "nubes",
//     "piano",
//     "corso",
//     "fuego",
//     "salas",
//     "lomos",
//     "canto",
//     "pacto",
//     "hojas",
//     "barco",
//     "jugar",
//     "pesca",
//     "cuero",
//     "suelo",
//     "olivo",
//     "carne",
//     "hueso",
//     "cable",
//     "pieza",
//     "suero",
// ];

export const fetchWordList = async () => {
    const url = 'https://random-word-api.herokuapp.com/all?lang=es';
    const regex = /^[A-Za-z]+$/;

    const cacheWords = localStorage.getItem('words');

    if(cacheWords) {
        console.log("Lista de palabras en local storage");
        return JSON.parse(cacheWords);
    }

    try {
        const response = await fetch(url);
        const words = await response.json();

        // Filtrar las palabras
        const filteredWords = [...new Set(
            words
                .filter(word => word.length === 5 && regex.test(word))
                .map(word => word.toLowerCase())
        )];

        // Guardar en local storage
        console.log("Lista de palabras guardada en local storage");
        localStorage.setItem('words', JSON.stringify(filteredWords));

        return filteredWords;

    } catch(error) {
        console.log(error);
    }
}

export const words = await fetchWordList();


// export const words = [
//     "suelo",
//     "cuero",
//     "ruido",
//     "eucro",
//     "aaaaa",
//     // "mundo",
// ]

// Array de array de caracteres
export const wordsArray = words.map(word => word.split(''));

export const randomSecretWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    return wordsArray[randomIndex];
};