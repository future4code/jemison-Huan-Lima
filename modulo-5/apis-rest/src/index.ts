import express, {Request, Response} from "express";
import cors from "cors";
import { users } from "./data";
import { Person } from "./types";

const app = express()
app.use(express.json())
app.use(cors())

// EXERCÍCIO 01

app.get("/users", (req:Request, res:Response) => {
    let errorCode = 400
    try{

        //1. Pegar a informação
        const userName = String(req.query.name)
        
        //2. Verificar se existe um dado
        if(!userName){
            errorCode = 422
            throw new Error("Falta passar o nome como parametro");
        }
        
        //3. Verificar se o dado está no banco
        const userSearched = users.find((user) => {
            return user.name.toLowerCase() === userName.toLowerCase()
        })

        //4. Se o dado não existir no banco:
        if(!userSearched){
            errorCode = 404
            throw new Error("Usuário não encontrado");
        }
        
        //5. Informar o resultado (sucesso)
        res.status(200).send(userSearched)

    } catch(error:any){

        res.status(errorCode).send(error.message)
    }
})

//EXERCÍCIO 02

app.get("/users/type", (req:Request, res:Response) => {
    
    let errorCode = 400

    try{
        //1. Pegar a informação
        let userType = String(req.query.type).toUpperCase()

        //2. Verificar se foi passada a informação
        if(!userType){
            errorCode = 422
            throw new Error("Informe um tipo de usuário através do parametro: (ADMIN/NORMAL)");
        }

        //3. Verificar se a informação é valida
        if(userType !== "ADMIN" && userType !== "NORMAL"){
            errorCode = 422
            throw new Error("O tipo de usuário informado deve ser ADMIN ou NORMAL");
        }

        //4. Pegar dados que correspondem ao tipo passado
        let listUserType = users.filter((user) => {
            return(user.type === userType)
        })

        //5. Retornar informações solicitadas
        res.status(201).send(listUserType)
    }catch(error:any){
        res.status(errorCode).send(error.message)
    }

})

//EXERCÍCIO 03

app.get('/user',(req:Request,res:Response)=>{
   
    let errorCode = 400

    try {
        //1. pegar informação via query

        const userName = String(req.query.name)

        //2. fazer verificação de dado

        if(!userName){
            errorCode = 422
            throw new Error("Falta passar o nome como parametro")
        }

        //3. procurar dado no banco

        const userSearched = users.find((user) => {
            return user.name.toLowerCase() === userName.toLowerCase()
        })

        //4. verificar se o dado é o mesmo solicitado

        if (!userSearched){
            errorCode = 404
            throw new Error("Usuário não encontrado");
            
        }

        //5. informar o resultado recebido

        res.status(200).send(userSearched)
         
    } catch (error:any) {
        //6. colocar status code de acordo com a tabela
        //7. 
        res.status(errorCode).send(error.message) 
    }

})

//EXERCÍCIO 04

app.post('/users',(req:Request,res:Response)=>{

    let errorCode = 400

    try {
        

        //1. pegar dados via body

        const {userName, userEmail, userType, userAge} = req.body

        //2. verificar se passou os dados

        if(!userName || !userEmail || !userType || !userAge){
            errorCode = 422
            throw new Error("Falta passar parametros");
            
        }

        //3. verificar se o tipo é válido (ADMIN/NORMAL)

        if(userType !== 'ADMIN' && userType !== "NORMAL"){
            errorCode = 422
            throw new Error("Insira um tipo de usuário válido: (ADMIN ou NORMAL)");
            
        }

        //4. atualizar os dados com os dados enviados

        const newUser : Person = {
            id : Math.random(),
            name: userName,
            email: userEmail,
            type: userType,
            age: userAge
        }


        //5. atualizar com o Push

        users.push(newUser)

        res.status(200).send(users)

        
    } catch (error:any) {
        //6. Mostrar o erro especifico com a mensagem
        res.status(errorCode).send(error.message)
    }
})

/* O fato de alterar o endpoint, não altera o funcionamento*/



app.listen(3003, () => {
    console.log("Servidor rodando em http://localhost:3003")
})