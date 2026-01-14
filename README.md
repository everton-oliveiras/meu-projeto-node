# Guia de Estudo: Meu Primeiro Ambiente Node.js + TypeScript

Este repositório contém a configuração básica e os aprendizados iniciais sobre Node.js e TypeScript. Abaixo, detalho o passo a passo utilizado para configurar este ambiente do zero.

---

## Guia Detalhado de Configuração

### Passo 1: Criar o Projeto (A Fundação)
Na programação, “criar um projeto” não é apenas criar uma pasta. É dizer ao Node que aquela pasta terá regras e dependências próprias.
* **Ação:** Criar uma pasta no computador e abrir o terminal dentro dela.
* **Comando:** `npm init -y`
* **Explicação:** O `npm` cria o arquivo `package.json` (o manifesto do projeto). É nele que o Node anota tudo o que o projeto precisa para funcionar.

### Passo 2: Adicionar Pacotes (O Tradutor)
O Node, sozinho, só entende JavaScript. Para ele entender TypeScript, é necessário instalar o "tradutor" dentro do projeto.
* **Comando:** `npm install typescript --save-dev`
* **Explicação:** * `npm install`: Baixa o pacote da internet.
    * `typescript`: O nome do pacote tradutor.
    * `--save-dev`: Indica que é uma ferramenta necessária apenas durante o desenvolvimento.
* **Resultado:** Surge a pasta `node_modules` com os códigos baixados.

### Passo 3: Configurar o TypeScript (O Manual de Regras)
O TypeScript é rigoroso e precisa de um arquivo de configuração para saber como deve se comportar.
* **Comando:** `npx tsc --init`
* **Explicação:** O `npx` localiza o TypeScript instalado e cria o arquivo `tsconfig.json`.
* **Resultado:** Este arquivo define as regras de como o código TypeScript será transformado em JavaScript.

### Passo 4: Instalar Suporte ao Node e Executores (A Engrenagem)
Passo crucial para o comando `ts-node` entender os comandos do sistema e não ficar "mudo".
* **Comando:** `npm install ts-node @types/node --save-dev`
* **Explicação:**
    * `ts-node`: Ferramenta que traduz e executa o código em um único passo.
    * `@types/node`: O "dicionário" que ensina ao TypeScript os comandos específicos do ambiente Node.js.

### Passo 5: O Grande Teste (A Validação)
* **Ação:** Criar um arquivo `index.ts` com um `console.log`.
* **Execução:** `npx ts-node index.ts`
* **Resultado:** A mensagem aparece no terminal, confirmando que o ambiente está 100% pronto.

---

## Como rodar este projeto
1. Clone o repositório.
2. No terminal, use `npm install` para baixar as dependências (a pasta node_modules não é enviada ao Git por ser muito pesada).
3. Use `npx ts-node index.ts` para executar.