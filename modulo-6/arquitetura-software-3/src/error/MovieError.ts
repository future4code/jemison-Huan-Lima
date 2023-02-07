import { CustomError } from "./CustomError";

export class InvalidDescription extends CustomError {
    constructor(){
        super(400, "Descrição inválida, a descrição deve ter pelo menos 15 caracteres")
    }
}