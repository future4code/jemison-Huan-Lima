console.log("Exercício 3")

const taskList = [
    'Limpar calçada',
    'Preparar desjejum',
    'Tomar banho',
    'Estudar',
    'Codar'
]

const task = process.argv[2]

function addTask(taskName){

    taskList.push(taskName)

    return(taskList)

}

console.table(addTask(task))