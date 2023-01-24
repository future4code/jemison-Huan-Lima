import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/userDTO";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const input: UserInputDTO = {
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email,
        password: req.body.password
      }

      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  getUsers = async (req: Request, res: Response) : Promise<void> => {
    try {
        const users = await new UserBusiness().getUsers();
        res.send(users).status(200);

    } catch (error:any) {
        res.send(error.message).status(400)
    }
}
}
