import type { Usuario } from "./modelos/modelos.js"

export class Utils {
    static filtrarUsuariosAdultos(usuarios: Usuario[]): Usuario[] {
        const resultado = usuarios.filter(usuario => usuario.idade >= 18);
        return resultado;
    }

    static emabaralharArray<T>(array: T[]): T[] {
        let indexAtual = array.length;
        let indexAleatorio: number;
        while (indexAtual != 0) { // itera de trás para frente
            indexAleatorio = Math.floor(Math.random() * indexAtual); // gera index aleatório inteiro
            indexAtual--;
            [array[indexAtual], array[indexAleatorio]] = [array[indexAleatorio], array[indexAtual]]; // troca posições
        }
        return array;
    }
}