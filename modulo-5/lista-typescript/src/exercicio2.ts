const inputAleatory = require("readline-sync")

function typeVar (variable:any){
    return(typeof(variable))
}

const aleatoryType = inputAleatory.question("Digite qualquer coisa: ")

console.log(typeVar(aleatoryType))