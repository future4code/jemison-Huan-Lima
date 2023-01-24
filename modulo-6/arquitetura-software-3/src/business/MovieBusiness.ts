import { MovieDatabase } from "../data/MovieDatabase"
import { MovieInputDTO } from '../model/userDTO'
import { generateId } from "../services/idGenerator"
import { Movie } from "../types/Movie"

export class MovieBusiness {
  async create({ title, description, duration, year }: MovieInputDTO):Promise<void> {
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
