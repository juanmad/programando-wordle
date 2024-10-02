# programando-wordle

## Funcionalidad del Juego a Implementar 

1. Elegir una palabra secreta de 5 letras de una lista.
2. El jugador ingresa una palabra de 5 letras.
3. Validar la palabra:
    - Si no es válida, mostrar mensaje de error.
    - Si es válida, comparar con la palabra secreta.
4. Comparar la palabra ingresada letra por letra:
    - Si la letra está en la posición correcta → verde.
    - Si la letra está en la palabra pero en otra posición → amarillo.
    - Si la letra no está en la palabra → gris.
5. Repetir hasta que:
    - El jugador acierta la palabra secreta → victoria.
    - El jugador falla 6 veces → derrota (revelar palabra secreta).