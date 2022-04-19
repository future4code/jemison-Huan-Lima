// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

/* 

1.  Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.


let array
console.log('a. ', array)

SAIDA: undefined

array = null
console.log('b. ', array)

SAÍDA: null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

SAÍDA: 11

let i = 0
console.log('d. ', array[i])

SAÍDA: 3

array[i+1] = 19
console.log('e. ', array)

SAÍDA: [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)

SAÍDA: 9

2. Leia o código abaixo com atenção.
Qual será o valor impresso no console se a entrada do 
usuário for: `"Subi num ônibus em Marrocos"`?

    
    const frase = prompt("Digite uma frase")
    
    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
 
SAÍDA: "SUBI NUM ÔNIBUS EM MIRROCOS 27"
    
*/

// EXERCÍCIO DE ESCRITA DE CÓDIGO

//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
//Em seguida, Imprima no console a seguinte mensagem:   
//O e-mail `emailDoUsuario` foi cadastrado com sucesso. 
//Seja bem-vinda(o), `nomeDoUsuario`!

let nomeUsuario = prompt("Digite o seu nome:")
let emailUsuario = prompt("Digite o seu e-mail:")

console.log(`O e-mail ${emailUsuario.trim()} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`)

//2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:


minhasComidas = ['Favada', 'Feijoada', 'Churrasco', 'Bode ao molho', 'Pirão']

//a) Imprima no console o array completo

console.log(minhasComidas)

//b) Imprima no console a mensagem 
//"Essas são as minhas comidas preferidas: ", 
//seguida por cada uma das comidas, 
//**uma embaixo da outra**.

console.log("Essas são as minhas comidas preferidas:")
console.log(minhasComidas[0])
console.log(minhasComidas[1])
console.log(minhasComidas[2])
console.log(minhasComidas[3])
console.log(minhasComidas[4])

//c) Aqui vai um desafio: pergunte ao usuário uma comida
//preferida. Troque a segunda comida da sua lista pela 
//inserida pelo usuário. Imprima no consolea nova lista

comidaUsuario = prompt("Qual a sua comida favorita?")
minhasComidas[1] = comidaUsuario
console.log(minhasComidas[0])
console.log(minhasComidas[1])
console.log(minhasComidas[2])
console.log(minhasComidas[3])
console.log(minhasComidas[4])

//3. Faça um programa, seguindo os passos:
    
//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

listaDeTarefas = []
    
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

listaDeTarefas[0] = prompt("Informe uma tarefa a realizar:")
listaDeTarefas[1] = prompt("Informe uma tarefa a realizar:")
listaDeTarefas[2] = prompt("Informe uma tarefa a realizar:")
    
//c) Imprima o array no console

console.log(listaDeTarefas)
    
//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

tarefa = prompt("Infome o indice da tarefa ja cumprida:")
   
//e) Remova da lista o item de índice que o usuário escolheu.

listaDeTarefas.splice(tarefa)
    
//f) Imprima o array no console

console.log(listaDeTarefas)


//DESAFIO

//1. Receba uma frase e retorne um array onde cada elemento 
//   é uma das palavras da frase, ignorando os espaços

let frase = prompt("Insira uma frase:")
let fraseArray = frase.split(" ")
console.log(fraseArray)

//2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, 
//   faça um programa que acha o índice da palavra Abacaxi 
//   e imprime tanto o índice quanto o tamanho do array

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log(frutas.indexOf("Abacaxi"))
console.log(frutas.length)