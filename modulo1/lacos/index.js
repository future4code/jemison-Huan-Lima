/*

*********************************Exercícios de interpretação de código*****************************************
    
    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, 
    pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
    1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
        
        
        let valor = 0
        for(let i = 0; i < 5; i++) {
          valor += i
        }
        console.log(valor)

    R: Este código incrementa a variavel valor enquanto "i" for menor que 5, sendo que ela é inicialisada com 0.
       Ou seja, o loop vai somar +1 até que i se torne 5.
       Portanto o valor impresso no console será: "4"
        
        
    2. Leia o código abaixo:
        
       
        const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        for (let numero of lista) {
          if (numero > 18) {
        		console.log(numero)
        	}
        }
        
        
        a) O que vai ser impresso no console?

        10
        11
        12
        15
        
        b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` 
        é suficiente? Se sim, o que poderia ser usado para fazer isso?

        R: Sim com a ajuda do indexOf é possivel retornar o indice de cada elemento como no código abaixo:

        const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        for (let numero of lista) {
          console.log(lista.indexOf(numero))
        }
        
    3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
        let linha = ""
        for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
            linha += "*"
        }
        console.log(linha)
        quantidadeAtual++
    }

    R: 
    *
    **
    ***
    ****

*/

/*

****************************************Exercícios de escrita de código***************************************
    1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    */

        let quantidadePets = Number(prompt("Quantos pets você possui?"))
        
    //    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

        if(quantidadePets === 0){
            console.log("Que pena! Você pode adotar um pet!")
        }
        
    //    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, 
    //    e guarde esses nomes em um array

        else{
            let nomesPets = []
            for(let i = 0; i < quantidadePets; i++){
                nomesPets[i] = prompt("Digite o nome do seu bichinho:")
            }
        
    //    c) Por fim, imprima o array com os nomes dos bichinhos no console

            for(let nome of nomesPets){
                console.log(nome)
            }
        }
    /*    
        
    2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto 
    somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, 
    realizando as operações pedidas:
    */

    const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
        
    //    a) Escreva um programa que **imprime** cada um dos valores do array original.

    function imprimeArray(array){
        for(let valores of array){
            console.log(valores)
        }
    }
    imprimeArray(arrayOriginal)
        
    //    b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

    function divideDezena(array){
        for(let valores of array){
            console.log(valores/10)
        }
    }
    divideDezena(arrayOriginal)
        
    //    c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do 
    //      array original e **imprima** esse novo array

    function criaArrayDePares(array){
        arrayDePares =[]
        for(let valor of array){
            if((valor%2) === 0){
                arrayDePares.push(valor)
            }
        }
        console.log(arrayDePares)
    }

    criaArrayDePares(arrayOriginal)
        
    //    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: 
    //      "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

    function criaArrayDeStrings(array){
        arrayDeStrings =[]
        for(let i = 0; i < array.length ; i++){
            arrayDeStrings[i] = `O elemento do index ${i} é: ${array[i]}.`
        }
        console.log(arrayDeStrings)
    }

    criaArrayDeStrings(arrayOriginal)
        
    //    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
        
    function maiorMenorNumero(array){
        maior = 0
        menor = 1000000000
        for(let valor of array){
            if(valor > maior){
                maior = valor
            }
            else if(valor < menor){
                menor = valor
            }
        }
        console.log(`O maior número é ${maior} e o menor é ${menor}`)
    }

    maiorMenorNumero(arrayOriginal)

/*
    1. Neste exercício vocês vão implementar uma brincadeira muito simples: 
    "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. 
    
    Inicialmente, uma das pessoas insere qual o número em que ela pensou. 
    A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, 
    então quem escolheu o número fica dando umas dicas para a outra pessoa, 
    indicando se o número que ela pensou é maior ou menor do que o chute em si. 
    Veja, abaixo, um exemplo de partida:
    
    ```
    Vamos jogar!
    O número chutado foi: 3
    Errrrrrrrou, é maior
    O número chutado foi: 18
    Errrrrrrrou, é menor
    O número chutado foi: 15
    Errrrrrrrou, é menor
    O número chutado foi: 11
    Acertou!!
    O número de tentativas foi: 4 
    
    ```
    
    Um resumo das funcionalidades são:

    */
    
    //a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. 
    //    Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`

    let numeroSecreto = Number(prompt("Insira seu número secreto:"))
    console.log("Vamos Jogar!")
    
    
    //b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, 
    //    através do `prompt`. A cada chute, deve ser informado no console:

    //- O número chutado, com a mensagem: `O número chutado foi: <número>`
    //- Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: 
    //    `Errou. O número escolhido é maior/menor`
    
    //c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, 
    //deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : 
    //<quantos chutes o usuário deu>`


    let numeroChutado = Number(prompt("Chute um número:"))
    let contador = 1
    while(numeroChutado !== numeroSecreto){
        console.log("O número chutado foi:", numeroChutado)
        contador ++
        if(numeroChutado < numeroSecreto){
            console.log("Errrrrrrrrrrrou, é maior!")
            numeroChutado = Number(prompt("Chute outro número:"))
        }
        else if(numeroChutado > numeroSecreto){
            console.log("Errrrrrrrrrrrou, é menor!")
            numeroChutado = Number(prompt("Chute outro número:"))
        }
    
    }
    console.log("O número chutado foi:", numeroChutado)
    console.log("Acertou!")
    console.log("O número de tentativas foi:", contador)
    
    /*

    2. Uma das principais características de uma boa pessoa programadora é conseguir resolver 
    seus problemas independentemente. Queremos que você comece a treinar isso a partir de hoje! 
    Então, vamos pedir para que você faça uma alteração no código acima. Agora, ao invés de ter 2 jogadores, 
    haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o jogo, 
    você deve sortear um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando o 
    valor até acertar. Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.
    
    Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração? 
    O que você poderia ter feito para que fosse mais fácil? **Deixe comentários no seu código sobre 
    esta reflexão.**

    */

    

    numeroSecreto = Math.floor(Math.random() * 100);
    console.log("Vamos Jogar!")
    
    numeroChutado = Number(prompt("Chute um número para começar:"))
    contador = 1
    while(numeroChutado !== numeroSecreto){
        console.log("O número chutado foi:", numeroChutado)
        contador ++
        if(numeroChutado < numeroSecreto){
            console.log("Errrrrrrrrrrrou, é maior!")
            numeroChutado = Number(prompt("Chute outro número:"))
        }
        else if(numeroChutado > numeroSecreto){
            console.log("Errrrrrrrrrrrou, é menor!")
            numeroChutado = Number(prompt("Chute outro número:"))
        }
    
    }
    console.log("O número chutado foi:", numeroChutado)
    console.log("Acertou!")
    console.log("O número de tentativas foi:", contador)
    