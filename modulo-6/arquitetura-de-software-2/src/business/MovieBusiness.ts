import { v4 as generateId } from 'uuid'
import { MovieDatabase } from "../data/MovieDatabase"
import { Movie } from "../types/Movie"

export class MovieBusiness {
  async create({ title, description, duration, year }: any):Promise<void> {
    if (!title || !description || !duration || !year) {
      throw new Error("Dados inválidos")
    }

    const id = generateId()

    const movieDatabase = new MovieDatabase();
    await movieDatabase.create({
      id,
      title,
      description,
      duration,
      year
    })
  }

  getMovies = async(): Promise<Movie[]> => {
    return await new MovieDatabase().getMovies();
  }

}
