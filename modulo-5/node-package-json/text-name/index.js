console.log("Exercício 1")

// a) Através do process.argv, como uma lista.


// b) 

const nameInput = process.argv[2]
const ageInput = Number(process.argv[3])

function textName(name, age){
    return(`Olá, ${name}! Você tem ${age} anos.`)
}

console.log(textName(nameInput, ageInput))

// c)

function textNameSum(name, age){
    return(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}.`)
}

console.log(textNameSum(nameInput, ageInput))
