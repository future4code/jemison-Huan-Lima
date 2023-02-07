import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { MovieInputDTO } from "../model/userDTO";

export class MovieController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const  input: MovieInputDTO = { 
        title: req.body.title, 
        description: req.body.description, 
        duration: req.body.duration, 
        year: req.body.year
      } 

      const movieBusiness = new MovieBusiness();
      
      await movieBusiness.create(input);

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  getMovies = async (req: Request, res: Response) : Promise<void> => {
    try {
        const movies = await new MovieBusiness().getMovies();
        res.send(movies).status(200);

    } catch (error:any) {
        res.send(error.message).status(400)
    }
}
}
