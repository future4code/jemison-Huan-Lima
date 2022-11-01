
function anagrama(palavra:string){
    let resultado:number = palavra.length;
    for(var i = 1 ; i < palavra.length; i++ ){
        resultado *= i;
    }
    return(resultado)
}

console.log(anagrama('mesa'))