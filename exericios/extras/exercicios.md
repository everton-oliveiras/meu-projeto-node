# 📝 Lista de Exercícios TypeScript

## 📂 1. Condicionais: `if/else` e `switch`
> **Foco:** Praticar lógica de decisão e mapeamento de valores.

### Exercício 01: Verificador de Febre
- **Enunciado:** Receba uma temperatura `t`. Se `t >= 37.5` retorne "Febre", senão "Normal".
- **Entrada:** `number`
- **Saída:** `string`

### Exercício 02: Par ou Ímpar
- **Enunciado:** Receba um número `n` e retorne se ele é "Par" ou "Ímpar".
- **Dica:** Use o operador de resto `% 2`.

### Exercício 03: Semáforo (Switch Case)
- **Enunciado:** Receba uma cor ("verde" | "amarelo" | "vermelho") e retorne a ação:
  - `verde` -> "Siga"
  - `amarelo` -> "Atenção"
  - `vermelho` -> "Pare"
- **Dica:** Use `switch`.

---

## 📂 2. Arrays e Laços de Repetição
> **Foco:** Percorrer listas e acumular ou filtrar valores.

### Exercício 04: Filtrar Números Negativos
- **Enunciado:** Dado um array de números, retorne um novo array contendo apenas os números menores que 0.
- **Exemplo:** `[5, -3, 10, -1]` -> `[-3, -1]`

### Exercício 05: Somar Positivos
- **Enunciado:** Dado um array de números, percorra-o e retorne a soma apenas dos números que forem maiores que 0.
- **Exemplo:** `[10, -5, 20]` -> `30`

### Exercício 06: Localizar Nome
- **Enunciado:** Crie uma função que recebe um array de nomes e um nome específico. Retorne `true` se o nome estiver na lista, caso contrário, `false`.

---

## 📂 3. Objetos e Tipagem
> **Foco:** Acessar propriedades e trabalhar com modelos de dados.

### Exercício 07: Verificador de Login
- **Enunciado:** Receba um objeto `{ user: string, loggedIn: boolean }`. Se `loggedIn` for true, retorne "Bem-vindo, [user]", senão "Acesso Negado".

### Exercício 08: Filtro de Estoque
- **Enunciado:** Dado um array de produtos `[{ nome: string, preco: number, emEstoque: boolean }]`, retorne apenas os produtos que estão em estoque.

### Exercício 09: Total do Carrinho
- **Enunciado:** Dado um array de itens `{ nome: string, preco: number, quantidade: number }`, retorne o valor total do carrinho (soma de preco * quantidade).

---

## 📂 4. 🏆 Desafios Integrados (Mistura Tudo)
> **Foco:** Unir tipos, objetos, listas e condicionais em um só código.

### Exercício 10: Sistema de Alunos
- **Enunciado:** Receba um objeto Aluno `{ nome: string, notas: number[] }`.
- **Tarefa:** Calcule a média das notas. Se a média for `>= 7`, retorne "Aprovado", senão "Reprovado".

### Exercício 11: Upgrade de Plano (Switch + Array)
- **Enunciado:** Receba um array de usuários `{ nome: string, plano: "free" | "premium" }`.
- **Tarefa:** Retorne um novo array onde todos os usuários agora possuem o plano "premium".

### Exercício 12: Relatório de Vendas
- **Enunciado:** Receba um array de vendas `{ valor: number, categoria: "eletronicos" | "alimentos" }`.
- **Tarefa:** Calcule o total vendido apenas na categoria "eletronicos".