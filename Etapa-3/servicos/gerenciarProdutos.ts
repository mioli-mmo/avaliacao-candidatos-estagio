import type { Produto } from "../modelos/modelos.js";
import { produtos } from "../banco/dados.js";

export class GerenciarProdutos {
    private arrayProdutos: Produto[];

    constructor() {
        this.arrayProdutos = produtos;
    }

    listarProdutos(): void {
        console.log("\n --- TODOS OS PRODUTOS ---");
        this.arrayProdutos.forEach((produto) => {
        console.log(`ID: ${produto.id} | ${produto.nome} - R$ ${produto.valorUnitario.toFixed(2)}`);
        });
    }

  adicionarProduto(nome: string, valorUnitario: number): void {
    const novoProduto: Produto = {
      id: this.arrayProdutos.length + 1,
      nome: nome,
      valorUnitario: valorUnitario,
    };
    this.arrayProdutos.push(novoProduto);
    console.log(`\n Produto "${nome}" cadastrado com sucesso!`);
  }
}