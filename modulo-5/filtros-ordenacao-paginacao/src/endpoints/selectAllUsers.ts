import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No user found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }