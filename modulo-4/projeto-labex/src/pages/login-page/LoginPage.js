import React from "react";
import { DivPai, Footer, Header, Main } from "./styled";
import {useNavigate} from 'react-router-dom';

function LoginPage(){

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/")
    }

    const goToAdmPage = () => {
        navigate("/admin/trips/:id")
    }

    return(
        <DivPai>
            <Header>
                <img src='https://www.pngmart.com/files/6/Rocket-PNG-Clipart.png'/>
                <h1>ÁREA ADMINISTRATIVA</h1>
                <img src='https://www.pngmart.com/files/6/Rocket-PNG-Clipart.png'/>
            </Header>
            <Main>
                <h2>ACESSO RESTRITO</h2>
                <div>
                    <label>E-mail:</label>
                    <input type={'text'} placeholder="Insira seu e-mail"/>
                </div>

                <div>
                    <label>Senha:</label>
                    <input type={'password'} placeholder="Insira sua senha de acesso"/>
                </div>
            </Main>
            <Footer>
                <button onClick={goToHome} >Voltar</button>
                <button onClick={goToAdmPage} >Entrar</button>
            </Footer>
        </DivPai>
    )
}

export default LoginPage;