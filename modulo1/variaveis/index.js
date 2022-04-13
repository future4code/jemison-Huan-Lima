/* 
EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

   1. O código quando executado deverá imprimir: 
    10
    10 5

   2. O código quando executado deverá imprimir:
    
    10 10 10

   3. Nomes de váriaveis mais adequados seriam:
     
    p : horasTrabalhadas
    t : salarioDia
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1

// a)
let nome;

//b)
let idade;

//c)
console.log(typeof nome);
console.log(typeof idade);

//d) Foi impresso o tipo "undefined", pois o "Null" não foi atribuido então a variável foi criada sem nenhum valor.

//e)
//armazenando valores nas variaveis criadas
nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é a sua idade?");

//f)
//exibindo os tipos de variaves com novos valores
console.log(typeof nome);
console.log(typeof idade);

// Percebi que ambas as variaveis agora são do tipo "string", embora idade receba um número, ela não retornou do tipo "number".

//g)
//imprimindo na tela os valores fornecidos pelo usuario.
console.log("Olá", nome+", você tem", idade, "anos.");

//EXERCÍCIO 2

//a)
//criando diferentes variaveis, para armazenar as diferentes respostas.
let fezExercicio = prompt("Já se exercitou hoje? [sim/não]");
let tomouCafe = prompt("Tomou café da manhã? [sim/não]");
let meditou = prompt("Já meditou hoje? [sim/não]");

//b)
//imprimindo as respectivas respostas, para as respectivas perguntas.
console.log("Já se exercitou hoje? [sim/não] -", fezExercicio);
console.log("Tomou café da manhã? [sim/não] -", tomouCafe);
console.log("Já meditou hoje? [sim/não] -", meditou);

//c)
let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

let c = a; // criei uma nova variavel para armazenar o valor de a, assim não perco o valor da variavel.
a = b;
b = c;

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//DESAFIO

let n1 = Number(prompt("Digite um número:"));
let n2 = Number(prompt("Digite outro número:"));

 //imprimindo resultados das operações
console.log("O primeiro número somado ao segundo número resulta em:", Number(n1+n2));
console.log("O primeiro número multiplicado pelo segundo número resulta em:", (n1*n2));


