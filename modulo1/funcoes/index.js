// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

// 1. Leia o código abaixo

// function minhaFuncao(variavel) {
// return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) O que vai ser impresso no console?

// 10
// 50

// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a
// função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

// Não ia acontecer nada, apenas na primeira chamada a função iria retornar 10, mas nada vai aparecer na tela
// na segunda chamada a função retorna o valor 50, mas nada tbm será impresso na tela, ou seja ambos os valores
// estarão na memoria do computador.

// 2. Leia o código abaixo

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)


// a. Explique o que essa função faz e qual é sua utilidade

// Esta função retorna um boleano afirmando ou não se a frase inserida tem a palavra cenoura
// independente de letras maiusculas ou minusculas.

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura`
// "True"

//      ii.  `CENOURA é bom pra vista`
// "True"

//      iii. `Cenouras crescem na terra`
// "False"


// EXERCÍCIO DE ESCRITA DE CÓDIGO

// 1. Escreva as funções explicadas abaixo:
   
//    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você,
como:
//     "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

function informacoesPessoais() {

let nome = "Caio"
let idade = 23
let cidade = "São Paulo"
let profissao = "estudante"

return(`Eu sou ${nome}, tenho ${idade}, anos, moro em ${cidade} e sou ${profissao}`)

}

console.log(informacoesPessoais())

   
//    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você.
//    Lembrando que a função não possui entradas, apenas imprime essa mensagem.

function informacoesPessoais() {

let nome = "Huan"
let idade = 32
let cidade = "Campina Grande"
let profissao = "auxiliar administrativo"

return(`Eu sou ${nome}, tenho ${idade}, anos, moro em ${cidade} e sou ${profissao}`)

}

console.log(informacoesPessoais())

   
//    b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
//        o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`).
//        Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
//        Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

function informacoesPessoais(nome, idade, cidade, profissao) {

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")
cidade = prompt("Onde você mora?")
profissao = prompt("Qual a sua profissão?")

return(`Eu sou ${nome}, tenho ${idade}, anos, moro em ${cidade} e sou ${profissao}`)

}

console.log(informacoesPessoais())

// 2. Escreva as funções explicadas abaixo:

//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
//faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

function soma(num1, num2){
    let primeiroNumero = num1
    let segundoNumero = num2

    return(primeiroNumero+segundoNumero)
}

console.log(soma(Number(prompt("Insira um número:")),Number(prompt("Insira outro número:"))))

//b) Faça uma função que recebe 2 números e retorne um booleano que informa 
//se o primeiro número é **maior ou igual** ao segundo.

function eMaiorOuIgual(num1, num2){
    let primeiroNumero = num1
    let segundoNumero = num2

    return(primeiroNumero>=segundoNumero)
}

console.log(eMaiorOuIgual(Number(prompt("Insira um número:")),Number(prompt("Insira outro número:"))))

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function ePar(num1, num2){
    let primeiroNumero = num1
    let segundoNumero = num2

    return((primeiroNumero%segundoNumero) === 0)
}

console.log(ePar(Number(prompt("Insira um número:")),Number(prompt("Insira outro número:"))))


//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima
// o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.


function mensagem(texto){
    let oTexto = texto
    return(oTexto.length, oTexto.toUpperCase())
    
}

console.log(mensagem(prompt("Insira uma mensagem:")))

//3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
//Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores 
//inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:


//Função para somar dois números
function somar(num1, num2){
    return(Number(num1)+Number(num2))
}

//Função para subtrair dois números
function diferenca(num1, num2){
    return(Number(num1)-Number(num2))
}

//Função para multiplicar dois números
function multiplicar(num1, num2){
    return(Number(num1)*Number(num2))
}

//Função para dividir dois números
function dividir(num1, num2){
    return(Number(num1)/Number(num2))
}

console.log(somar(prompt("Insira um número:"), prompt("Insira outro número:")))

console.log(diferenca(prompt("Insira um número:"), prompt("Insira outro número:")))

console.log(multiplicar(prompt("Insira um número:"), prompt("Insira outro número:")))

console.log(dividir(prompt("Insira um número:"), prompt("Insira outro número:")))