import { UserDatabase } from "../data/UserDatabase"
import { User } from "../types/User"
import { UserInputDTO } from "../model/userDTO"
import { generateId } from "../services/idGenerator"

export class UserBusiness {
  async create({ email, name, password }: UserInputDTO):Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

  getUsers = async(): Promise<User[]> => {
    return await new UserDatabase().getUsers();
  }

}
