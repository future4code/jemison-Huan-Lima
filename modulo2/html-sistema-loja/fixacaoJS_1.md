``` 
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    let comissaoFixa = Number(qtdeCarrosVendidos)*100
    let comissaoPercentual = Number(valorTotalVendas)*0.05
    let comissaoTotal = comissaoFixa + comissaoPercentual
    return comissaoTotal+2000
} 

```