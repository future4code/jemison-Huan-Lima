enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type PersonMovies = {
    name:string,
    year:number,
    genre:GENERO,
    score?:number
}
function movieDetails (name:string, year:number, genre:GENERO, score?:number){
    const listDetails:PersonMovies = {
        name: name,
        year: year,
        genre: genre,
        score:score

    }
    return(listDetails)
}

console.table(movieDetails('Os minions', 2014, GENERO.COMEDIA, 8))