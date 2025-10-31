import readline from "readline";
import { GerenciarProdutos } from "./servicos/gerenciarProdutos.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const gerenciador = new GerenciarProdutos();

console.log("=== Sistema de Cadastro de Produtos ===");
gerenciador.listarProdutos();

rl.question("\nDigite o nome do novo produto: ", (nome) => {
  rl.question("Digite o valor unitário: ", (valorStr) => {
    const valor = parseFloat(valorStr);

    if (isNaN(valor) || valor <= 0) {
      console.log(" Valor inválido. Tente novamente.");
      rl.close();
      return;
    }

    gerenciador.adicionarProduto(nome, valor);
    gerenciador.listarProdutos();
    rl.close();
  });
});
