import { Movie } from "../types/Movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async create({ id, title, description, duration, year }: any): Promise<void> {
    await MovieDatabase.connection
      .insert({
        id: id,
        title: title,
        description: description,
        duration_in_minutes: duration,
        year_of_release: year
      })
      .into(MovieDatabase.TABLE_NAME);
  }

  getMovies = async (): Promise<Movie[]> => {
    try {
        const movies: Movie[] = [];
        const result = await MovieDatabase.connection().select("*").from("LABEFLIX_MOVIE");

        for (let movie of result){
            movies.push(movie)
        }

        return movies;

    } catch (error:any) {
        throw new Error(error.message);

    }
}


}
