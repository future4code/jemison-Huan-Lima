import React from "react";
import { DivPai, Form, Header,} from "./styled";
import {useNavigate} from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";

function LoginPage(){

    const {form, onChange, clear} = useForm({email:"", password:""})

 
    
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/")
    }
    
    const login = (event) => {
        event.preventDefault()

        axios.post(`${BASE_URL}/login`, form)
        .then((response) => {
            localStorage.setItem("token",response.data.token)
            navigate("/admin/trips/list")
        }).catch((error) => {
            console.log(error.message)
        })
        clear()
        
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
                        value = {form.email}
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
                        value = {form.password}
                        placeholder="Insira sua senha de acesso"
                        onChange={onChange}
                        required
                        pattern="^.{6,}"
                        title="mínimo 6 caracteres"
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