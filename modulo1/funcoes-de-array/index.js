/*

**********************************Exercícios de interpretação de código****************************************
      
1.  Leia o código abaixo
        
     
        const usuarios = [
          { nome: "Amanda Rangel", apelido: "Mandi" },
          { nome: "Laís Petra", apelido: "Laura" },
          { nome: "Letícia Chijo", apelido: "Chijo" }
        ]
        
        const novoArrayA = usuarios.map((item, index, array) => {
           console.log(item, index, array)
        })
        
      
        a) O que vai ser impresso no console?

        Vai ser impresso cada item do array, o indice de cada item e um array completo com todos os itens.

2. Leia o código abaixo
        
      
        const usuarios = [
          { nome: "Amanda Rangel", apelido: "Mandi" },
          { nome: "Laís Petra", apelido: "Laura" },
          { nome: "Letícia Chijo", apelido: "Chijo" },
        ]
        
        const novoArrayB = usuarios.map((item, index, array) => {
           return item.nome
        })
        
        console.log(novoArrayB)
     
        
        a) O que vai ser impresso no console?

        Um novo array apenas com os nomes do array original.
        
3. Leia o código abaixo
        
      
        const usuarios = [
          { nome: "Amanda Rangel", apelido: "Mandi" },
          { nome: "Laís Petra", apelido: "Laura" },
          { nome: "Letícia Chijo", apelido: "Chijo" },
        ]
        
        const novoArrayC = usuarios.filter((item, index, array) => {
           return item.apelido !== "Chijo"
        })
        
        console.log(novoArrayC)
        
        
        a) O que vai ser impresso no console?
        
        Vai ser impresso um novo array com os itens do array original 
        exceto o item cujo apeligo seja igual a "Chijo".


*/

//***************************************Exercícios de escrita de código****************************************
    
//1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
//realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**
        
        
        const pets = [
           { nome: "Lupin", raca: "Salsicha"},
           { nome: "Polly", raca: "Lhasa Apso"},
           { nome: "Madame", raca: "Poodle"},
           { nome: "Quentinho", raca: "Salsicha"},
           { nome: "Fluffy", raca: "Poodle"},
           { nome: "Caramelo", raca: "Vira-lata"},
        ]
            
        
//a) Crie um novo array que contenha apenas o nome dos doguinhos

const nomesPets = pets.map((item, index, array) => {
    return item.nome
})
console.log(nomesPets)

        
//b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)

const racaSalsicha = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})
console.log(racaSalsicha)

        
//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
//  A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

const poodles = pets.filter((item, index, array) => {
    return item.raca === "Poodle"
})

const promocaoParaPoodles = poodles.map((item, index) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})
console.log(promocaoParaPoodles)


//2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando
//  as funções de array **map** e **filter:**
    
    
    const produtos = [
       { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.50 },
       { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.80 },
       { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.60 },
       { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.70 },
       { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
       { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
       { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.20 },
       { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
       { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
       { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]
   
        
    // a) Crie um novo array que contenha apenas o nome de cada item

    const nomesProdutos = produtos.map((item, index, array) => {
        return item.nome
    })
    console.log(nomesProdutos)

    
    // b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
    // aplicando 5% de desconto em todos eles

    const produtosComDesconto = produtos.map((item, index) => {
        return {
            nome: item.nome,
            preco: (item.preco - (item.preco * 0.05)).toFixed(2)
        }
    })
    console.log(produtosComDesconto)

    
    // c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

    const bebidas = produtos.filter((item, index, array) => {
        return item.categoria === "Bebidas"
    })
    console.log(bebidas)

    
    // d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

    const produtosYpe = produtos.filter((item, index, array) => {
        return (item.nome).includes("Ypê")
    })
    console.log(produtosYpe)
    
    
    //  e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
    
    const promocaoYpe = produtosYpe.map((item, index) => {
        return `Compre ${item.nome} por R$${item.preco.toFixed(2)}`
    })
    console.log(promocaoYpe)


    //*******************************************Desafios*****************************************************

    // 1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:
         
    const pokemons = [
        { nome: "Bulbasaur", tipo: "grama" },
        { nome: "Bellsprout", tipo: "grama" },
        { nome: "Charmander", tipo: "fogo" },
        { nome: "Vulpix", tipo: "fogo" },
        { nome: "Squirtle", tipo: "água" },
        { nome: "Psyduck", tipo: "água" },
     ]
        
    // a) Crie um novo array que contenha apenas o nome dos pokémons em **ordem alfabética**
        
    const nomesPokemos = pokemons.map((item, index) => {
        return (item.nome)
    })    
    
    nomesPokemos.sort()

    console.log(nomesPokemos)
    
        
    // b) Crie um novo array apenas com os tipos dos pokémons, **sem repetição**

    const tiposPokemons = pokemons.map((item, index) => {
        return item.tipo 
    })
    tipos = []
    for(i=0 ; i < tiposPokemons.length ; i++){
        if(tipos.includes(tiposPokemons[i])){

        }else{
            tipos.push(tiposPokemons[i])
        }
    }   
    
    console.log(tipos)