import type { Usuario, Produto } from "../modelos/modelos.js"

// Usuários
export const usuarios: Usuario[] = [
  { id: 1, nome: "Ana Souza", idade: 17 },
  { id: 2, nome: "Carlos Lima", idade: 25 },
  { id: 3, nome: "Mariana Alves", idade: 30 },
  { id: 4, nome: "João Pereira", idade: 19 },
  { id: 5, nome: "Fernanda Costa", idade: 15 },
];

// Produtos
export const produtos: Produto[] = [
  { id: 1, nome: "Teclado Mecânico", valorUnitario: 250.0 },
  { id: 2, nome: "Mouse Gamer", valorUnitario: 180.5 },
  { id: 3, nome: "Monitor Full HD", valorUnitario: 900.99 },
  { id: 4, nome: "Cadeira Ergonômica", valorUnitario: 1299.99 },
  { id: 5, nome: "Headset Bluetooth", valorUnitario: 320.0 },
];