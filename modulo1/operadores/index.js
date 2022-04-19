/* 
# EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1)

a. false
b. false
c. true
d. boolean

2) O problema no código é que ao inves de operar com Numbers, ele está operando com string, dessa forma ao inves da variavel soma apresentar a soma de dois números ele vai concatenar. Por exemplo, se forem inseridos os números 2 e 3, ao invés de retornar 5 o programa vai retornar 23.

3) Minha sugestão é que seja informado no prompt que o valor recebido é um Number, assim:
let primeiroNumero = Number (prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))

*/


// # EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1)

//a)
let suaIdade = Number(prompt("Qual a sua idade?"))

//b)
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)?"))

let maiorIdade = suaIdade > idadeAmigo

//c)
console.log("Sua idade é maior do que a do seu melhor amigo?", maiorIdade)

//d)
console.log("A diferença de idade entre vocês é de:", (suaIdade-idadeAmigo), "anos")

//2)

//a) 
let numPar = Number(prompt("Insira um número par:"))

//b)
let resto = (numPar%2)

//c)
//Como todos os números são pares o resto sempre é igual a zero.

//d)
//Quando é digitado um número impar o resto é sempre diferente de zero.

// 3)

let idadeAnos = Number(prompt("Qual a sua idade em anos?"))

let idadeMeses = (idadeAnos * 12)
let idadeDias = (idadeAnos * 365)
let idadeHoras = (idadeDias * 24)

console.log("Sua idade em meses é:", idadeMeses)

console.log("Sua idade em dias é:", idadeDias)

console.log("Sua idade em horas é:", idadeHoras)

// 4)

let num1 = Number(prompt("Informe um número:"))

let num2 = Number(prompt("Informe outro número:"))

let resto1por2 = (num1 % num2)
let resto2por1 = (num2 % num1)

console.log("O primeiro numero é maior que segundo?", (num1 > num2))
console.log("O primeiro numero é igual ao segundo?", (num1 === num2))
console.log("O primeiro numero é divisivel pelo segundo?", (resto1por2 === 0))
console.log("O segundo numero é divisivel pelo primeiro?", (resto2por1 === 0))


// DESAFIO

// DESAFIO (1)


let celsios = Number (80)
let fr = Number(77)

let frParaKv = (((fr - 32)*(5/9))+273)
let csParaFr = ((celsios*(9/5))+32)
let csParaKv = (celsios+273.15)

//a)
console.log(frParaKv)
//b)
console.log(csParaFr)
//c)
celsios = Number(30)
console.log((celsios*(9/5))+32)
console.log(celsios+273.15)
//d)
celsios = Number(prompt("Insira uma temperatura em Celsius:"))
csParaFr = ((celsios*(9/5))+32)
csParaKv = (celsios+273.15)
console.log("Esta é a temperatura em Fahrenheit:", csParaFr)
console.log("Essa é a temperatura em Kelvin:", csParaKv)



// DESAFIO (2)

let custoKwHora = Number (0.05)

//a)
let consumokwHora = Number(280)
let valor = (consumokwHora * custoKwHora)
console.log(valor)

//b)
let valorComDesconto = (valor - (valor*0.15))

console.log(valorComDesconto)

// DESAFIO (3)

// a)

let libra = Number(20)
let kilo

kilo = (libra / 2.205)

console.log("20lb equivalem a", kilo+ "kg")

// b)

let onca = Number(10.5)
kilo = (onca/3.527)

console.log("10.5oz equivalem a ", kilo+ "kg")

// c)

let milha = Number(100)
let metro = (milha * 1609)

console.log("100mi equivalem a", metro+ "m")

// d)

let pes = Number(50)
metro = (pes/3.281)

console.log("50ft equivalem a", metro+"m")

//e)

let galao = Number(103.56)
let litro = (galao * 379)

console.log("103.56gal equivalem a", litro+"l")

// f)

let xicara = Number(450)
litro = (xicara*0.24)

console.log("450xic equivalem a", litro+"l")

// g)

xicara = Number(prompt("Informe o valor em xicara a ser convertido:"))
litro = (xicara*0.24)

console.log("450xic equivalem a", litro+"l")
