type PersonUser = {
    name: string,
    email: string,
    role: string
}

const users:PersonUser[] =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function returnAdmin(listUser:PersonUser[]) {
    let listEmailsAdmin:Array<string>= []
    listUser.filter((user) => {
        if(user.role === 'admin'){
            listEmailsAdmin.push(user.email)
        }
    })
    return(listEmailsAdmin)
}

console.table(returnAdmin(users))