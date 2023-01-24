import { UserDatabase } from "../data/UserDatabase";
import { user } from "../types/user";

export class UserBusiness {
    createUser = async (input: any): Promise<void> => {
        try {
            const {name, email, password} = input;

            if(!name || !email || !password){
                throw new Error("Preencha todos os campos");
            }

            if(email.indexOf("@") === -1){
                throw new Error("Email invalido");
                
            }

            if (password.length < 6) {
                throw new Error("A senha deve ter no mínimo 6 caracteres");
            }

            const id: string = Date.now().toString();
            const userDatabase = new UserDatabase();
            await userDatabase.insertUser({
                id,
                name,
                email,
                password,
            })
        } catch (error: any) {
            throw new Error(error.message);
            
        }
    }

    getUsers = async(): Promise<user[]> => {
        return await new UserDatabase().returnUsers();
    }

    findUser = () => {};
    deleteUser = async(input: {id:string}) => {
        if(!input.id){
            throw new Error("Insira um id");
            
        }
        return await new UserDatabase().deleteUser(input.id)
    };
}