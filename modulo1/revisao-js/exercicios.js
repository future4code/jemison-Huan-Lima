// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

//EXERCÍCIO 02

function retornaArrayInvertido(array) {
  return array.reverse()
}

//DESAFIO 01

function retornaArrayInvertidoSemReverse(array) {
    let arrayInvertido = []
    for(let i=array.length -1 ; i >= 0; i--){
        arrayInvertido.push(array[i])
    }
    return arrayInvertido
  }

// EXERCÍCIO 03

function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a-b)
}

//DESAFIO 02


// EXERCÍCIO 04

function retornaNumerosPares(array) {
   
    let apenasPares = array.filter((numeros) => {
            return (numeros % 2 === 0)})
    return apenasPares
}

//DESAFIO 03

function filtraNumerosPares(array) {
    let apenasPares = []
    for(let i = 0 ; i < array.length ; i++){
        if ((array[i] % 2) === 0){
            apenasPares.push(array[i])
        }
    }
    return apenasPares
}

// EXERCÍCIO 05

function retornaNumerosParesElevadosADois(array) {
    let apenasPares = array.filter((numeros) => {
        return (numeros % 2 === 0)})
    let paresAoQuadrado = apenasPares.map((numero) => {
        return ((numero*numero))
    })
    return paresAoQuadrado
}

// EXERCÍCIO 06

function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for(let i=0 ; i < array.length ; i++){
        if (array[i] > maiorNumero){
            maiorNumero = array[i]
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07

function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorDeDoisNumeros = {maiorNumero: 0, maiorDivisivelPorMenor: false, diferenca: 0}
    if (num1 > num2){
        maiorDeDoisNumeros.maiorNumero = num1
        maiorDeDoisNumeros.diferenca = num1 - num2
        if ((num1%num2) === 0){
            maiorDeDoisNumeros.maiorDivisivelPorMenor = true
        }

    }else{
        maiorDeDoisNumeros.maiorNumero = num2
        maiorDeDoisNumeros.diferenca = num2 - num1
        if ((num2%num1) === 0){
            maiorDeDoisNumeros.maiorDivisivelPorMenor = true
        }
    }
    return maiorDeDoisNumeros
}

// EXERCÍCIO 08

function retornaNPrimeirosPares(n) {
   let pares = []
   let contaPar = 0
   while(pares.length < n){
       pares.push(contaPar)
       contaPar += 2
   }
   return pares
}

// EXERCÍCIO 09

function classificaTriangulo(ladoA, ladoB, ladoC) {
    if ((ladoA === ladoB) && (ladoB === ladoC)){
        return "Equilátero"
    }else if((ladoA !== ladoB) && (ladoB !== ladoC) && (ladoA !== ladoC)){
        return "Escaleno"
    }else{
        return "Isósceles"
    }

}

// EXERCÍCIO 10

function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a -b)
    let novoArray = []
    posicaoMaior = (array.length) -2
    novoArray.push(array[posicaoMaior])
    novoArray.push(array[1])
    return novoArray
  
}

// EXERCÍCIO 11

function retornaChamadaDeFilme(filme) {
    let elenco = filme.atores.map((ator) =>{
        return " " + ator})
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por${elenco}.`
}

// EXERCÍCIO 12

function retornaPessoaAnonimizada(pessoa) {
    let pessoasAnonimas = {...pessoa, nome:"ANÔNIMO"}
    return pessoasAnonimas
}

// EXERCÍCIO 13A

function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => {
        return (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5)
    })
    
}

// EXERCÍCIO 13B

function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => {
        return (pessoa.idade <= 14 || pessoa.idade >= 60 || pessoa.altura < 1.5)
    })
}

// EXERCÍCIO 14

function retornaContasComSaldoAtualizado(contas) {
    
            
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}