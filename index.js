// Bubble Sort: Lista [5, 2, 9, 11, 7].

var arr = [5, 2, 9, 11, 7]; // Array desordenado.
let aux; // Vai guardar valores temporários na troca.

for (let i = 0; i < arr.length; i++) { // Controla quantas vezes o array será percorrido.
    for (let N = 0; N < arr.length; N++) { // Compara cada par de números vizinhos.
        if (arr[N] > arr[N + 1]) { // Se o número atual for maior que o próximo, troca.
            aux = arr[N]; // Salva o número atual.
            arr[N] = arr[N + 1]; // O próximo vai para o lugar do atual.
            arr[N + 1] = aux; // E o atual vai para o lugar do próximo.
        }
    }
}
console.log(arr); // Mostra o array já ordenado
