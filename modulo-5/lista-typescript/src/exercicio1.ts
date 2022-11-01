const userInput = require("readline-sync")

function monthNumForName (monthNum:string){
    const months = [
        '0','janeiro', 'fevereiro', 'março', 'abril',
        'maio', 'junho', 'julho', 'agosto',
        'setembro', 'outubro', 'novembro', 'dezembro'
    ]
    let monthName = 0
    if(monthNum[0] === '0'){
        monthName = Number(monthNum[1])
    }else{
        monthName = Number(monthNum)
    }
    return(months[monthName])
}



function birthDate (name:string, date:string){
    let datePart = date.split('/')
    let month = monthNumForName(datePart[1])
    
    return(
        `Olá me chamo ${name}, nasci no dia ${datePart[0]} do mês de ${month} do ano de ${datePart[2]}`
    )
}

const nameUser = userInput.question("Digite o seu nome: ")
const birthDateUser = userInput.question("Digite sua data de nascimento -> (dd/mm/aaa): ")

console.log(birthDate(nameUser, birthDateUser))