import express, {Request, Response} from "express";
import cors from "cors";
import { request } from "http";
import { products } from "./data";

const app = express()

app.use(express.json())

app.use(cors())

//Exercício 1

app.get("/test", (req:Request, res:Response) => {
    res.status(200).send('Servidor rodando na porta 3003!')
})

//Exercício 4

app.post("/produtos", (req:Request, res:Response) => {
    const productName = req.body.name
    const productPrice = req.body.price

    products.push(
        {
            id: Date.now().toString(),
            name: productName,
            price: productPrice
        }
    )
    res.status(200).send(products)
})

//Exercício 5

app.get("/produtos", (req:Request, res:Response) => {
    res.status(200).send(products)
})

//Exercício 6

app.get("/produtos/:id", (req:Request, res:Response) => {
    const productId:string = req.params.id 
    const productNewPrice = req.body.price

    for(let i = 0 ; i < products.length ; i++){
        if(products[i].id === productId){
            products[i].price = productNewPrice
        }
    }
    res.status(200).send(products)
})

//Exercício 07





app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})