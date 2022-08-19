import React from "react";
import { DivPai, Form, Header,} from "./styled";
import {useNavigate} from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";

function LoginPage(){

    const [body, onChange] = useForm({email:"", password:""})
    
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/")
    }
    
    const login = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}darvas/login`, body)
        .then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log("error")
        })
        console.log(body)
        navigate("/admin/trips/:id")
    }
     
    return(
        <DivPai>
            <Header>
                <img src='https://www.pngmart.com/files/6/Rocket-PNG-Clipart.png'alt="logo"/>
                <h1>ÁREA ADMINISTRATIVA</h1>
                <img src='https://www.pngmart.com/files/6/Rocket-PNG-Clipart.png'alt="logo"/>
            </Header>
            <Form onSubmit={login}>
                <h2>ACESSO RESTRITO</h2>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input 
                        name="email"
                        id="email"
                        type={'email'} 
                        value = {body.email}
                        placeholder="Insira seu e-mail"
                        onChange={onChange}
                        required
                        pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                    
                </div>

                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                        name="password"
                        id="password"
                        type={'password'} 
                        value = {body.password}
                        placeholder="Insira sua senha de acesso"
                        onChange={onChange}
                        required
                        pattern="^.{6,}"
                    />
                    
                </div>

                <div>
                    <button onClick={goToHome} >Voltar</button>
                    <button onSubmit={login} >Entrar</button>
                </div>
            </Form>
            
        </DivPai>
    )
}

export default LoginPage;