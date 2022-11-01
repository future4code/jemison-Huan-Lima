type PersonClient = {
    cliente: string,
    saldoTotal: number,
    debitos: Array<number>
}

const clients:PersonClient[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function somaArray(array:Array<number>){
    let soma:number = 0
    for(var i = 0; i < array.length; i++){
        soma += array[i];
    }
    return(soma)
}

function extratoContas(listClient:PersonClient[]){
    let saldo:number = 0
    let negativados:PersonClient[] = []
    listClient.filter((client) => {
        saldo = (client.saldoTotal) - (somaArray(client.debitos))
        client.saldoTotal = saldo
        client.debitos = []
        if(saldo < 0){
            negativados.push(client)
        }
    })
    return(negativados)
}

console.table(extratoContas(clients))
