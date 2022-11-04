import { Person, Posts } from "./types";


export const users: Person[] = [
    {
        id: "01",
        name: "Davi Lucca Lima",
        phone: "83999999988",
        email: "davilucca@gmail.com"
    },
    {
        id: "02",
        name: "Danielle Figueiredo",
        phone: "83555599988",
        email: "danielle@gmail.com"
    },
    {
        id: "03",
        name: "Huan Lima",
        phone: "836666699988",
        email: "huan@gmail.com"
    },
    {
        id: "04",
        name: "Alfredo Cat",
        phone: "836666697799",
        email: "gatinho@gmail.com"
    },
    {
        id: "05",
        name: "Malu Dog",
        phone: "836666691444",
        email: "marluce@gmail.com"
    },
    {
        id: "06",
        name: "Luís Inácio",
        phone: "836666691313",
        email: "lulala@gmail.com"
    }

]

export const posts:Posts[] = [
    {
        id: "01",
        title: "Deixando a mamadeira de lado",
        body: "Como agora estou comendo de tudo, vou abandonar o gagau! heeeeeeeeebaaaaaaaa",
        userId: "01",
    },
    {
        id: "02",
        title: "Super cansada",
        body: "Estou muito cansada, mas estou trinando todos os dias! Foco",
        userId: "02",
    },
    {
        id: "03",
        title: "Ansioso pra meu primeiro niver",
        body: "Meu aniversário ta chegando e eu to muito ansioso pra poder comemorar com a família! Ebaaaaa",
        userId: "01",
    },
    {
        id: "04",
        title: "Muito trabalho e estudo",
        body: "Hoje o dia foi puxado, mas to fazendo os exercícios bem tranquilo!",
        userId: "03",
    },
    {
        id: "05",
        title: "Gatinho macio",
        body: "Gatinho dorminhoco miau, miau, miau!",
        userId: "04",
    },
    {
        id: "06",
        title: "Tô chegando!",
        body: "Ta na hora do jair ir embora e eu vou abrir o sigilo dele!",
        userId: "06",
    },
    {
        id: "07",
        title: "Adoro uma garrafa",
        body: "Tava tristona, mas me deram uma garrafa e me animei! auauauauauau",
        userId: "05",
    }
]