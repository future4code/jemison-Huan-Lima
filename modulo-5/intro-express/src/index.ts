import express, {Request, Response} from "express";
import cors from 'cors';
import { posts, users } from "./data";
import { Posts } from "./types";


const app = express();
app.use(express.json());
app.use(cors());


//Exercício 1

app.get("/", (req:Request, res:Response) => {          
    res.send("Este é o exercício 1")
})

//Exercicio 2

// exercicio no arquivo .types.ts

//Exercício 3

// Base de dados no arquivo .data.ts

//Exercicio 4

//Endpoint que exibe lista de usuários


app.get("/users",(req:Request, res:Response)=>{

    const usersList = users

    res.status(200).send(usersList)
})


//Exercício 5 

// tipo no arquivo types.ts

//Exercício 6

/*
Achei melhor criar fora do array de usuarios, pois pra mim fica mais fácil trabalhar com eles,
pois dentro de cada post tem o ID de usuário e é bem mais simples de trabalhar com esses dados!
Os dados estão no arquivo .data
*/


//Exercicio 7

//Endpoint que exibe lista de posts


app.get("/posts",(req:Request, res:Response)=>{

    const postsList = posts

    res.status(200).send(postsList)
})


//Exercício 8

app.get("/posts/:id",(req:Request, res:Response)=>{

    const id = req.params.id
    const postsUser:Posts[] = []
    posts.filter((post) => {
        if(post.id === id){
            postsUser.push(post)
        }
    })
    res.status(200).send(postsUser)
})


app.listen(3003, () => {
    console.log("Servidor rodando em http://localhost:3003")
})
