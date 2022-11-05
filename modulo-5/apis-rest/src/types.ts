export enum USER_TYPE{
    ADMIN = "Administrador",
    NORMAL = "Normal"
}

export type Person = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}