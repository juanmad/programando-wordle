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

export const randomSecretWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsSplit.length);
    return wordsSplit[randomIndex];
};