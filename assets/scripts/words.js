export const words = [
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
    "suero",
];

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