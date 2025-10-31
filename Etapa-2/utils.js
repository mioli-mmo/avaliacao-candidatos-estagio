export class Utils {
    static filtrarPares(array) {
        const resultado = array.filter(i => i % 2 == 0);
        return resultado;
    }
    
    static contarFrequencias(texto) {
        const palavras = texto.toLowerCase().replace(/[.,!?;:()"]/g, '').split(" "); // caixa baixa --> remove caracteres especiais --> separa palavras
        const frequencia = palavras.reduce((contagem, palavra) => {
        contagem[palavra] = (contagem[palavra] || 0) + 1;
        return contagem;
        }, {})
        return frequencia;
    }
}