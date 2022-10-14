console.log("Exercício 2")

const operation = process.argv[2]
const n1 = Number(process.argv[3])
const n2 = Number(process.argv[4])

function mathOperation(op, num1, num2){
    if(op === 'som'){
        return(num1+num2)
    }else if(op === 'sub'){
        return(num1 - num2)
    }else if(op === 'div'){
        return(num1/num2)
    }else{
        "Operação inválida!"
    }
}

console.log(mathOperation(operation, n1, n2))