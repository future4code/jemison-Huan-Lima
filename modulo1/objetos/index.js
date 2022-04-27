/* 

********************************Exercícios de interpretação de código************************************
    
    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
    1.  Leia o código abaixo
        

        const filme = {
        	nome: "Auto da Compadecida", 
        	ano: 2000, 
        	elenco: [
        		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
        		"Virginia Cavendish"
        		], 
        	transmissoesHoje: [
        		{canal: "Telecine", horario: "21h"}, 
        		{canal: "Canal Brasil", horario: "19h"}, 
        		{canal: "Globo", horario: "14h"}
        		]
        }
        
        console.log(filme.elenco[0])
        console.log(filme.elenco[filme.elenco.length - 1])
        console.log(filme.transmissoesHoje[2])
        

        a) O que vai ser impresso no console?

        "Matheus Nachtergaele"
        "Virginia Cavendish"
        canal: "Globo", horario: "14h"

    2. Leia o código abaixo
    

    const cachorro = {
    	nome: "Juca", 
    	idade: 3, 
    	raca: "SRD"
    }
    
    const gato = {...cachorro, nome: "Juba"}
    
    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)
  
   
    a) O que vai ser impresso no console?

    nome: "Juca", idade: 3, raca: "SRD"
    nome: "Juba", idade: 3, raca: "SRD"
    nome: "Jubo", idade: 3, raca: "SRD"
    
    b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

    implementa o objeto já criado anteriormente, com a possibilidade de o alterar ou acrescentar mais chaves.

    3. Leia o código abaixo
    
    
    function minhaFuncao(objeto, propriedade) {
    	return objeto[propriedade]
    }
    
    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }
    
    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))
    
    
    a) O que vai ser impresso no console?

    "false"
    "undefined"
    
    b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

    O primeiro console imprime o valor atribuido a chave backender dentro do objeto pessoa.
    Enquanto que o segundo console retorna "undefined", pois dentro do objeto não existe a chave altura, 
    ou seja não foi definida.
*/

//******************************Exercícios de escrita de código********************************

/*

1. Resolva os passos a seguir: 
    
a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos 
(um array que sempre terá exatamente **três apelidos**). 
Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:
    
    
    // Exemplo de entrada
    const pessoa = {
       nome: "Amanda", 
       apelidos: ["Amandinha", "Mandinha", "Mandi"]
    }
    
    // Exemplo de saída
    "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
    
 */   
    const pessoas = {
        nome: "Davi",
        apelidos: ["Davizinho", "Galeguinho", "Fofinho"]
    }
    
    function meusApelidos(objeto){
        return(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
    }

    console.log(meusApelidos(pessoas))
 /*  

b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, 
mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando 
como argumento o novo objeto

*/
    
    const outraPessoa = {
        ...pessoas, apelidos: ["Lindoso", "Cheiroso", "Gostoso"]
    }

    console.log(meusApelidos(outraPessoa))

/*

    2. Resolva os passos a seguir: 
    
a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

*/

    const dados = {
        nome: "Huan",
        idade: 32,
        profissao: "Desenvolvedor"
    }

    const outrosDados = {...dados, nome: "Danielle", idade: 34, profissao:"Professora"}
    
/*
b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`
    */

    function leiaDados(objeto){
        return([objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length])
    }

    console.log(leiaDados(dados))
    console.log(leiaDados(outrosDados))

/*
3. Resolva os passos a seguir: 
    
a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

*/

    let carrinho = []

/*
    
b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades:
nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

*/

    const fruta1 = {
        nome: "Abacaxi",
        disponibilidade: true
    }

    const fruta2 = {...fruta1, nome: "Uva"}
    const fruta3 = {...fruta1, nome: "Limão"}
/*
    
c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de 
`carrinho`. Invoque essa função passando os três objetos criados. 
    
*/

function abasteceCarrinho(objeto){
    carrinho.push(objeto)
}

abasteceCarrinho(fruta1)
abasteceCarrinho(fruta2)
abasteceCarrinho(fruta3)


/*
         
d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**

*/

console.log(carrinho)

/*

*******************************************Desafios********************************************************

1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console 
um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o **tipo** dele para 
garantir que é um **objeto.**

*/

function coletaDados(nome, idade, profissao){

    const dadosPessoais = {

    }
    dadosPessoais.nome = nome
    dadosPessoais.idade = idade
    dadosPessoais.profissao = profissao

    console.log(dadosPessoais)
    console.log(typeof(dadosPessoais))
}

coletaDados(prompt("Qual o seu nome?"), prompt("Qual a sua idade?"), prompt("Qual a sua profissão?"))

/*

2. Crie uma função que receba dois objetos que representam filmes. 
Eles devem ter as propriedades: ano de lançamento e nome. 
A função deve retornar uma mensagem no seguinte modelo:

*/

let filme1 = {
    anoLancamento: 2000,
    nome: "Alto da Compadecida"
}

let filme2 = {
    anoLancamento: 1998,
    nome: "Titanic"
}

function comparaFilmes(objeto1, objeto2){
    console.log("O primeiro filme foi lançado antes do segundo?", (objeto1.anoLancamento < objeto2.anoLancamento))
    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", (objeto1.anoLancamento === objeto2.anoLancamento))
}

comparaFilmes(filme1, filme2)

/*

3. Crie uma função a mais pro exercício 3 de escrita de código. 
Essa função vai auxiliar o controle de estoque do sacolão: 
ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto 
com a propriedade disponibilidade com o valor invertido. 

*/

function inverteDisponibilidade(objeto){

    objeto.disponibilidade = false
    console.log(objeto)
}

inverteDisponibilidade(fruta1)