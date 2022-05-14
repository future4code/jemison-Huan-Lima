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

function ordenaArrayComLoop(array){
    for (let i = 1; i < array.length; i++){
        for (let x = 0; x < i; x++){
            if (array[i] < array[x]) {
            let x = array[i];
            array[i] = array[x];
            array[x] = x;
        }
        }
    }
    return array
}

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
    function soma(numeros){
        let soma = 0
        for (let i=0 ; i < numeros.length ; i++){
            soma += numeros[i]
        }
        return soma
    }
                                            
    for (let i=0 ; i < contas.length ; i++){
            contas[i].saldoTotal -= soma(contas[i].compras)
            contas[i].compras = []
        }
    return(contas)
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    function ordene(a,b) {
        if (a.nome < b.nome){
           return -1
        }
        else if (a.nome > b.nome){
           return 1
        }
        else{
            return 0
        }
      }
      
      return consultas.sort(ordene);
}

// EXERCÍCIO 15B

function retornaArrayOrdenadoPorData(consultas) {

    //Para ordenar as datas é preciso convertelas em milissegundos utilizando Date.parse.
    //Após a ordenação correta é possivel retornar ao formato de data utilizando o new Date
    //como na função milissegundosParaData

    function converteDataStringParaDateEOrdena(objeto){
        for(let i = 0 ; i < objeto.length ; i++){
            let array = objeto[i].dataDaConsulta.split("/") // remove as barras 
            let auxiliar = array[0]
            array[0] = array[1] // inverte dia e mes para poder utilizar o Date.parse
            array[1] = auxiliar
            let novoArray = array
            objeto[i].dataDaConsulta = Date.parse(novoArray) // converte a data em milissegundos contando de 01/01/1970
        }
            return milissegundosParaData(objeto.sort(ordene)) // retorna a data ordenada e formatada no padrão brasileiro
        }

    
    function milissegundosParaData(objeto){
        for(let i = 0 ; i < objeto.length ; i++){
            let data = new Date(objeto[i].dataDaConsulta)
            objeto[i].dataDaConsulta = data.toLocaleDateString() //Formata a hora no padrão brasileiro
        }
        return objeto
    }

    function ordene(a,b) {
        if (a.dataDaConsulta < b.dataDaConsulta){
           return -1
        }
        else if (a.dataDaConsulta > b.dataDaConsulta){
           return 1
        }
        else{
            return 0
        }
    }
    
    return converteDataStringParaDateEOrdena(consultas)
    
}
    
    

