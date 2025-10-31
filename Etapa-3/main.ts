import { Utils } from "./utils.js";
import { usuarios, produtos } from "./banco/dados.js"
console.log("\n--- IMPLEMENTAÇÃO 1 --- ");
console.log("Usuários maiores de idade:");
console.log(Utils.filtrarUsuariosAdultos(usuarios));
console.log(" ");
console.log("--- IMPLEMENTAÇÃO 2 --- ");
console.log("Elementos embaralhados:");
console.log(Utils.emabaralharArray([1,2,3,4,5,6]));