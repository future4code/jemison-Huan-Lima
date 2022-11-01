/* 
A) Quando um valor numerico é atribuido a variavel de tipo string ela não aceita,
pois ela só aceita o tipo informado.

B) Se a variavel for do tipo number ela so aceita um valor numérico, contudo é possível
fazer com que ela aceite uma string ou outro tipo usando o chamado union type, que usa o
operador lógico | entre os dois tipos escolhidos.

*/

// C)

type Person = {
    name: string,
    age: number,
    favColor: Colors
}

enum Colors {
    RED = 'Vermelho',
    ORANGE = 'Laranja',
    YELLOW = 'Amarelo',
    GREEN = 'Verde',
    BLUE = 'Azul',
    INDIGO = 'Anil',
    VIOLET = 'Violeta'
}

const people1 : Person = {
    name: 'Davi Lucca',
    age: 1,
    favColor: Colors.RED
}

const people2 : Person = {
    name: 'Huan Lima',
    age: 33,
    favColor: Colors.BLUE
}

const people3 : Person = {
    name: 'Danielle',
    age: 34,
    favColor: Colors.VIOLET
}

const people4 : Person = {
    name: 'Alfredo',
    age: 12,
    favColor: Colors.YELLOW
}

let peopleList = []

peopleList.push(people1)
peopleList.push(people2)
peopleList.push(people3)
peopleList.push(people4)

console.table(peopleList)