import React, { useEffect, useState} from "react";
import axios from "axios";



function Register () {

    const [users, setUsers] = useState([])
    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")



    const handleInputName = (e) => {
        setInputName(e.target.value)
    }

    const handleInputEmail = (e) => {
        setInputEmail(e.target.value)
    }

    const addUser = (e) => {
        e.preventDefault();

        const newUser = {name:inputName, email:inputEmail}
        const newListUsers = [...users, newUser]
        setUsers(newListUsers)
        setInputName("")
        setInputEmail("")
    }

    const allUsers = users.map((user, index) => {
        return (
            <div key={index}>{user.name}</div>,
            <div key={index}>{user.email}</div>
        )
    })

    useEffect(() => {
        getAllUsers()
    }, [])


    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const serviceHeaders = {
        headers: {
            Authorization: 'huan-lima-jemison'
        }
    }

    const getAllUsers = () => {
        axios.get(url, serviceHeaders)
        .then((response) => {setUsers(response.data.result.list)})
        .catch((error) => {console.log(error.response)})
    }
    const body = {
        "name": inputName,
        "email": inputEmail

    }

    const postCreateUser = (e) => {
        e.preventDefault();

        axios.post(url, body, serviceHeaders)
        .then((response) =>{
            alert("Usuário cadastrado com sucesso!")
            getAllUsers()
        }).catch((error) => {alert("Tente novamente")})
        setInputName("")
        setInputEmail("")
    }




    return(

        <div>
                <input type="text" value={inputName} onChange={handleInputName} />
                <input type="text" value={inputEmail} onChange={handleInputEmail} />
                <button onClick={addUser}>
                    Adicionar
                </button>
                <div>{allUsers}</div>
        </div>

    )
}

export default Register;
