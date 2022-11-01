
enum setores {
    MARKETING = 'Marketing',
    VENDAS = 'Vendas',
    FINANCEIRO = 'Financeiro'
}

type Person = {
    nome: string,
    salário: number,
    setor: setores,
    presencial: boolean

}

const pessoas: Person[] = [
	{ nome: "Marcos", salário: 2500, setor: setores.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: setores.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: setores.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: setores.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: setores.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: setores.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: setores.MARKETING, presencial: true }
]

function selecionaMarketing(lista:Person[]) {
    let selecao:Array<Person> = []
    lista.filter((funcionario) => {
        if(funcionario.setor === setores.MARKETING && funcionario.presencial === true){
            selecao.push(funcionario)
        }
    })
    return (selecao)
}

console.table(selecionaMarketing(pessoas))