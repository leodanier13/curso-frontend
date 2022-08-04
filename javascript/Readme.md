
# Javascript
- Estado do JS (https://2020.stateofjs.com/en-US/technologies/)
- Onde é executado
- Omnipresente na web
- Apps híbridos
- Aplicação de ponta-a-ponta: banco de dados, back-end / front-end
- Interagir com DOM (api-web)
- Requisições dinâmicas
- IoT (internet das Coisas): o JS está presente em tudo

## Fundamentos JS
- Fundamentos do JavaScript são essenciais para avançar no desenvolvimento de aplicações modernas, é a base de diversos frameworks 
- Neste curso evoluímos da base para o topo
- É melhor que começar na frente e precisar retornar a base

## Metodologia 
- Método progressivo e integrado
- Todo arranha céu só é erguido depois de ter uma fundação robusta e segura
- Neste curso apresentamos conceitos de modo progressivo, seguindo uma linha lógica de evolução
- Começa fácil e vai aumentando a complexidade
- Além da especialização, aprendemos a integrar com diversas possibilidades

## Lógica de Programação
- computador:
-- Máquina que extrai dados
-- Processar: realizar operações nos dados de entrada
- Dado: é o que pode ser processado
- Informação: resultado do processamento 
- Processamento de dados: Entrada (dados) > Processamento > Saída (informação)

E a lógica?
Lógica é aquilo que faz sentido 

Como escrever um programa?
- Aplicar a lógica para descrever os passos para resolver um problema em ordem de execução 

A lógica de programação 
- É a técnica de sequenciar pensamentos, passos, fluxo de dados para atingir um objetivo: a informação
- A sequência de passos, instruções que o computador deve seguir é conhecida como ALGORITMO

Algoritmo
- Sequência lógica e finita de instruções que resolvem um problema
- Exemplo: receita de bolo, manual de instrução 
- Nem todo algoritmo é um programa de computador, mas todo programa de computador é algoritmo
- Quem viabiliza o funcionamento dos algoritmos nos computadores: linguagens de programação

### Algoritmo para calcular a média de 3 números
1. Inicio;
2. Receber o primeiro número: entrada 1;
3. Receber o segundo número: entrada 2;
4. Receber o terceiro número: entrada 3;
5. Somar os 3 números recebidos e dividir por três: (entrada 1 + entrada 2 + entrada 3) / 3;
6. Exibir o resultado: print, echo, console.log ;
7. fim;

## Funcionalidades gerais 
- Criar algoritmos e programas para executar no navegador: client side
- Manipular o DOM: elementos HTML, eventos (clique, submit), estilos CSS
- nODE.js: framework JS para back-end / runtime em JS
- Mongo.db: banco de dados em JS
- React / Vue.js / Angular: frameworks JS para desenvolvimento web / mobile
- React Native: framework JS para desenvolvimento mobile

- Recebe e manipula dados
- Tomar decisões baseados na lógica computacional
- Loop e interações
- Condições de saída

### Executar o JS
- Console browsers
- Editores: Sublime, VS code
JS Fiddle https://jsfiddle.net/

### Instalação do Node.js
- Para a gente conseguir executar scripts JS no terminal de comando, precisamos utilizar o Node.js
- Instalação: https://nodejs.org/pt-br/download/package-manager/

## Variáveis
São utilizadas para referenciar espaço na memória

- var
- const (fica com o valor imutável)
- let
- string (tipo de variável para conjunto de caracteres)
- tipagem: número ou string
- array

# Operadores 

## Aritméticos: retornam o resultado de uma operação
+ somar
- subtrair
* multiplicar
/ dividir
% resto de divisão

## Comparadores matemáticos: teste lógico, retorno booleano (true / false):
< menor que
> maior que
<= menor ou igual 
>= maior ou igual

## Comparadores Lógicos: teste lógico, retorno booleano (true / false):
==  igualdade entre sentenças (valor)
!=  diferença entre sentenças (valor)
=== igualdade entre sentenças (valor e tipo)
!== diferença entre sentenças (valor e tipo)

a == b = true
a != b = false

## Operadores de lógica e junção lógica
!   NÃO (NOT)
&&  E (AND)
||  OU (OR)

O sinal de exclamação (!) é o operador NOT (não), utilizado para negar a setença que vem na sequência.

#### Exemplos:

a != b    // o valor de a é diferente de b
x !== y   // o valor e o tipo de x são diferentes de y
!a == b   // o valor de a não é igual ao valor de b

#### As condições lógicas são convertidas em números binários:
true é equivalente a 1
false é equivalente a 0

#### Operador lógico de atribuição 

Tem a capacidade de attribuir valor a uma variável a partir de uma condição lógica, economiza IFs 

Exemplo:

var meuCarro = cor == "preto" ? "preto" : "branco";

## If 
if (cor == 'preto') {
    meuCarro = 'preto';
} else if (cor == 'vermelho'){
    meuCarro = 'cinza';
} else if (cor == 'amarelo'){
    meuCarro = 'branco';
} else {
    meuCarro = 'azul';
}