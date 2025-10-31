    import { Utils } from "./utils.js";

    // Implementação 1 - Filtrar números pares
    // --- Parâmetros ---
    const arrayTeste1 = [1, 2, 3, 4, 5];
    const arrayTeste2 = [10, 0, 5, -2, -7, -6];
    const arrayTeste3 = [20, 55, 81, 120, 90, 329, -1000];
    // ---
    console.log("--- IMPLEMENTAÇÃO 1 ---");
    console.log("Nº pares - Array 1: " + Utils.filtrarPares(arrayTeste1));
    console.log("Nº pares - Array 2: " + Utils.filtrarPares(arrayTeste2));
    console.log("Nº pares - Array 3: " + Utils.filtrarPares(arrayTeste3));

    console.log(" ")

    // Implementação 2 - Contar frequência de palavras
    // --- Parâmetros ---
    const frase1 = "Três pratos de trigo para três tigres tristes";
    const frase2 = "A aranha arranha a rã. A rã arranha a aranha. Nem a aranha arranha a rã. Nem a rã arranha a aranha";
    const frase3 = "O tempo perguntou ao tempo quanto tempo o tempo tem, o tempo respondeu ao tempo que o tempo tem o tempo que o tempo tem";
    // ---
    console.log("--- IMPLEMENTAÇÃO 2 ---");
    console.log("FRASE 1:");
    console.log(Utils.contarFrequencias(frase1));
    console.log(" ")
    console.log("FRASE 2:");
    console.log(Utils.contarFrequencias(frase2));
    console.log(" ")
    console.log("FRASE 3:");
    console.log(Utils.contarFrequencias(frase3));