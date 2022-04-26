// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = prompt("Informe a altura do retangulo:")
  let largura = prompt("Informe a largura do retangulo:")
  let areaRetangulo = altura * largura

  console.log(areaRetangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Informe o ano atual:")
  let anoNascimento = prompt("Informe o ano do seu nascimento:")
  let idade = anoAtual - anoNascimento

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let imc = peso / (altura*altura)

  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  let nome = prompt("Qual o seu nome?")
  let idade = prompt("Qual a sua idade?")
  let email = prompt("Qual o seu email?")

  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let coresFavoritas = []
  coresFavoritas[0] = prompt("Informe uma cor favorita:")
  coresFavoritas[1] = prompt("Informe outra cor favorita:")
  coresFavoritas[2] = prompt("Informe outra cor favorita:")

  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let tamst1 = string1.length
  let tamst2 = string2.length
  let eMaior = tamst1 === tamst2

  return eMaior

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  tamanhoArray = array.length

  return array[tamanhoArray - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  primeiroElemento = array[0]
  array[0] = array[array.length -1]
  array[array.length-1] = primeiroElemento

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  let palavra1 = string1.toUpperCase()
  let palavra2 = string2.toUpperCase()

  let saoIguais = palavra1 === palavra2
  
  return saoIguais

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Qual o ano atual?"))
  let anoNascimento = Number(prompt("Qual o ano de seu nascimento?"))
  let anoRg = Number(prompt("Qual o ano de emissão do seu RG?"))
  let idade = anoAtual - anoNascimento
  let tempoEmissao = anoAtual - anoRg

  let ePraRenovar = ((idade <= 20) && (tempoEmissao >= 5)) || ((idade > 20) && (idade <= 50) && (tempoEmissao >= 10)) || ((idade > 50) && (tempoEmissao >= 15))

  console.log(ePraRenovar)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let oAno = Number(ano)
  let eBissexto = ((oAno % 400) === 0) || (((oAno % 4) === 0) && ((oAno % 100) !== 0)) 

  return eBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let maiorDezoito = (prompt("Você tem mais de 18 anos?")).toLowerCase()
  let ensinoMedio = (prompt("Você possui ensino médio completo?")).toLowerCase()
  let disponibilidade = (prompt("Você possui disponibilidade exclusiva durante os horários do curso?")).toLowerCase()

  maiorDezoito = maiorDezoito === 'sim' && ensinoMedio === maiorDezoito && ensinoMedio ===disponibilidade

  console.log(maiorDezoito)

}