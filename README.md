# 📙 Guia de Execução

Documento contendo instruções para a execução de cada etapa da avaliação, descrição de testes e exemplos de usos. <br>
O repositório está estruturado em 3 diretoŕios referentes às suas respectivas etapas; cada um deles está configurado com o necessário para as implementações.

## 🧩 Etapa 1 - Resolução de Problemas (com Python)

A linguagem escolhida para esta etapa foi Python, por sua praticidade. Esse diretório contém dois arquivos:
- **utils.py**, o qual implementa as funções requisitadas;
- **main.py**, usado para executar essas funções.

o arquivo **main.py** apresenta 3 chamadas de funções pré definidas para cada implementação (1, 2 e desafio). Caso deseje personalizar os testes, os parâmetros estão devidamente sinalizados pelo comentário ```--- Parâmetros ---```.

### Exemplos de uso

- **Implementação 1 - Soma de inteiros**
    - Sub-total do valor de uma nota fiscal
    - Calcular a soma para uso em cálculos de média
    - Somar o valor total de vendas de uma loja
- **Implementação 2 - Inversão de um array**
    - Inverter a ordem de resultados de busca (A-Z / Z-A)
- **Desafio - Transposição de n elementos**
    - Mover pessoas do início para o fim de uma fila

## 🟨 Etapa 2 - JavaScript

De acordo com as instruções, a linguagem utilizada foi **JavaScript**. Este diretório contém 4 arquivos:

- **package.json** e **package-lock.json**, especificando o necessário para o funcionamento do Node.js no diretório
- **utils.js**, o qual implementa as funções requisitadas;
- **main.js**, usado para executar essas funções e exibir os resultados.

O arquivo **main.js** apresenta 3 chamadas de funções pré-definidas para cada implementação (1 e 2).  
Caso deseje personalizar os testes, os parâmetros estão devidamente sinalizados pelo comentário ```--- Parâmetros ---```.

### Exemplos de uso

- **Implementação 1 - Encontrar valores pares**
    - intercalar frente e verso em uma fila de uma impressora.
- **Implementação 2 - Contar a frequência de palavras**
    - implementar uma nuvem de palavras em um site.

## 🟦 Etapa 3 - TypeScript

De acordo com as instruções, a linguagem utilizada foi **TypeScript**. Este diretório contém a seguinte estrutura:

- **package.json** e **tsconfig.json**, especificando configurações do TypeScript e Node.js;
- **utils.ts**, que implementa funções utilitárias (filtrar usuários adultos e embaralhar array);
- **main.ts**, usado para executar as funções utilitárias;
- **cli-cadastrar-produto.ts**, interface de linha de comando para cadastro de produtos;
- **modelos/modelos.ts**, contendo as interfaces ```Usuario``` e ```Produto```;
- **servicos/gerenciarProdutos.ts**, classe ```GerenciarProdutos``` para gerenciar produtos;
- **banco/dados.ts**, dados estáticos de usuários e produtos.

### Executando o Projeto

Para executar a Etapa 3, navegue até o diretório e execute:

```bash
cd Etapa-3
npm install
```

**Executar funções utilitárias:**
```bash
npx run start
```

**Executar CLI de cadastro de produtos:**
```bash
npm run cli
```

### Exemplos de uso

- **Implementação 1 - Filtrar usuários adultos**
    - sistema de votação online que permite apenas maiores de idade;
    - controle de acesso a conteúdo restrito.
- **Implementação 2 - Embaralhar array genérico**
    - randomizar ordem de perguntas em um quiz;
    - sortear ordem de apresentações em eventos.
- **Implementação 3 - Sistema de cadastro de produtos**
    - gerenciar catálogo de produtos em e-commerce;
    - sistema de inventário para lojas.