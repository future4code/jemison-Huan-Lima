/*

*******************************EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO***************************************

1. Leia o código abaixo:
    
    
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)
    
    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
   
    
    a) Explique o que o código faz. Qual o teste que ele realiza? 

    O código basicamente testa se um número informado pelo usuário é par ou não, portanto se o resto
    da divisão desse número por 2 for 0 o código imprime no console "Passou no teste", pra informar que
    o número é par. Caso o resto da divisão seja diferente de 0, será impresso "Não passou no teste.",
    logo o número não é par.
    
    b) Para que tipos de números ele imprime no console "Passou no teste"? 

    Números pares.
    
    c) Para que tipos de números a mensagem é "Não passou no teste"?

    Números impares.

2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas 
tarefas de um supermercado:
    
   
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    
    
    a) Para que serve o código acima?

    Serve para o usuário consultar o preço de determinada fruta, o usuário informa o nome da fruta
    e o programa retorna seu preço.
    
    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

    "O preço da fruta Maçã é R$ 2.25"
    
    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem 
    impressa no console se retirássemos o `break` que está logo acima do `default` 
    (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

    "O preço da fruta Pêra é R$ 5"

3. Leia o código abaixo:
    
  
    const numero = Number(prompt("Digite o primeiro número."))
    
    if(numero > 0) {
      console.log("Esse número passou no teste")
      let mensagem = "Essa mensagem é secreta!!!"
    }
    
    console.log(mensagem)
    
    
    a) O que a primeira linha está fazendo?

    é criada a variavel numero que recebe um número informado pelo usuário.
    
    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

    Para o número 10 a mensagem que deverá retornar é: "Esse número passou no teste"
    Para o número -10 o console deverá retornar algum tipo de erro pois a variavel mensagem foi
    criada dentro da estrutura da condicional.
    
    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

    Sim. como a váriavel mensagem foi definida dentro da estrutura condicional, o javascript não a 
    reconhece fora da estrutura. Se o console.log tivesse sido feito dentro da estrutura, seria impresso
    o conteudo da mensagem, ou se a variavel tivesse sido criada fora da estrutura e dentro dela apenas
    recebesse o valor.
*/

//*********************************EXERCÍCIOS DE ESCRITA DE CÓDIGO*******************************************//

/*

1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela
   pode dirigir (apenas maiores de idade).
    
    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
       Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
*/

let idade = Number(prompt("Qual a sua idade?"))
let diferenca = 18 - idade

if (idade > 17){
    console.log("Você pode dirigir.")
} else{
    console.log(`Você ainda não pode dirigir. Faltam ${diferenca} anos, para que você atinja a idade necessária!`)
}

/*

2. Agora faça um programa que verifica que turno do dia um aluno estuda. 
   Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
   Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

*/

let turno = prompt("Em que período você estuda").toLowerCase()

if (turno === "matutino"){
    console.log("Bom dia!")
} else if (turno === "vespertino"){
   console.log("Boa tarde!")
}else{
    console.log("Boa noite!")
}

/*

3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

*/

turno = prompt("Em que período você estuda").toLowerCase()

switch (turno){
    case "matutino":
        console.log("Bom dia!")
        break;
    case "vespertino":
        console.log("Boa tarde!")
        break;
    case "noturno":
        console.log("Boa noite!")
        break;
    default:
        console.log("Em qual turno você estuda?")
        break;
}

/*

4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme 
   com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. 
   Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e 
   outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
   Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima 
   "Escolha outro filme :("

*/

let genero = prompt("Qual o gênero de filme deseja assistir?").toLowerCase()
let valor = Number(prompt("Quanto deseja pagar em um ingresso?"))

if (genero === "fantasia" && valor < 15){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}

//***********************************************DESAFIOS************************************************//

/*  

1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem 
   "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar 
   (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" 
   e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

*/


let lanche = null

if (genero === "fantasia" && preco < 15){
    lanche = prompt("Qual lanchinho você vai comprar?")
  console.log("Bom filme!")
   console.log("Aproveite seu", lanche )
    
}else{
    console.log("Escolha outro filme :(")
}

/*

2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. 
   Para esta compra, o usuário deve fornecer algumas informações:

    - Nome completo;
    - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    - Categoria: pode ser as opções 1, 2, 3 ou 4;
    - Quantidade de ingressos
    
    O seu sistema deve solicitar estas informações ao usuário, através do `prompt`. 
    Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o 
    valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). 
    Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. 
    Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, 
    mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
    
    
*/

const SF = [1320,880,550,220]
 
const DT = [660,440,330,170]

const FI = [1980,1320,880,330]

let nomeUsuario = prompt("Informe o nome do comprador:")
let tipoJogo = prompt("Qual o tipo de jogo?")
let etapaSigla = prompt("Deseja ingressos para qual etapa do torneio?")
let categoria = Number(prompt("Qual a categoria do ingresso?"))
let quantidade = Number(prompt("Quantos ingressos deseja adquirir?"))
let preco = 0
let etapa = ""
let total = 0

if (tipoJogo == "DO"){
    if (etapaSigla === "SF"){
        preco = SF[categoria-1]
        etapa = "Semifinal"
    }else if(etapaSigla === "DT"){
        preco = DT[categoria-1]
        etapa = "Decisão do 3 lugar"
    }else{
        preco = FI[categoria-1]
        etapa = "Final"
    }
    total = preco * quantidade
    console.log("---Dados da compra---")
    console.log(`Nome do cliente: ${nomeUsuario}`)
    console.log(`Tipo de jogo: Nacional`)
    console.log(`Etapa do jogo: ${etapa}`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidade} ingressos`)
    console.log("---Valores---")
    console.log(`Valor do ingresso: R$ ${preco}`)
    console.log(`Valor total: R$ ${total}`)
} else{
    if (etapaSigla === "SF"){
        preco = SF[categoria-1] /4.10
        etapa = "Semifinal"
    }else if(etapaSigla === "DT"){
        preco = DT[categoria-1] /4.10
        etapa = "Decisão do 3 lugar"
    }else{
        preco = FI[categoria-1] /4.10
        etapa = "Final"
    }
    total = preco * quantidade
    console.log("---Dados da compra---")
    console.log(`Nome do cliente: ${nomeUsuario}`)
    console.log(`Tipo de jogo: Internacional`)
    console.log(`Etapa do jogo: ${etapa}`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidade} ingressos`)
    console.log("---Valores---")
    console.log(`Valor do ingresso: U$ ${preco}`)
    console.log(`Valor total: U$ ${total}`)
}

