# Conceitos Fundamentais: Node.js

Este documento reúne os conceitos teóricos que estudei para entender como o Node.js funciona "por baixo do capô".

---

## 1. O que é o Node.js?
O **Node.js** é um ambiente de execução que permite utilizar JavaScript fora do navegador. Ele é focado na construção do **Back-end** (motores de sites, APIs e sistemas de servidor).

* **Motor V8:** Utiliza o mesmo motor de alta performance do Google Chrome.
* **Versatilidade:** Usado desde automação de tarefas simples até bases para frameworks como React e Angular.
* **Comunidade:** Uma das maiores comunidades do mundo, com milhares de bibliotecas prontas.

---

## 2. Arquitetura e Funcionamento

O Node.js funciona de forma eficiente graças a três componentes principais:

* **Call Stack (Pilha de Execução):** Segue o modelo **LIFO** (*Last In, First Out*). É onde o motor rastreia em que parte do código estamos.
* **Callback Queue (Fila de Espera):** Segue o modelo **FIFO** (*First In, First Out*). É onde as tarefas finalizadas esperam para serem executadas.
* **Event Loop:** O "guarda de trânsito". Ele verifica se a *Call Stack* está vazia e, se estiver, traz as tarefas da *Callback Queue* para serem processadas.

---

## 3. Gerenciadores de Pacotes (npm e Yarn)

São ferramentas que permitem instalar bibliotecas de terceiros nos projetos.

* **npm (Node Package Manager):** O padrão que já vem instalado com o Node.
* **Yarn:** Criado pelo Facebook como uma alternativa mais rápida e segura em alguns cenários. Ambos gerenciam as dependências (as "peças" do projeto).

---

## 4. Frameworks Populares

Frameworks são "esqueletos" prontos que agilizam o desenvolvimento:

* **ExpressJS:** O mais famoso. É minimalista e flexível, ideal para microserviços.
* **NestJS e AdonisJS:** Chamados de "Opinativos", pois já trazem uma estrutura mais rígida e organizada de pastas e regras.