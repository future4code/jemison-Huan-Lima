import React from 'react';
import { DivPai, Footer, Header, Main } from './styled';
import {useNavigate} from 'react-router-dom';

function ApplicationsFormPage(){

    const navigate = useNavigate();

    const goToTrips = () => {
        navigate("/trips/list")
    }

    return(
        <DivPai>
            <Header>
                <img src='https://www.pngmart.com/files/6/Rocket-PNG-Clipart.png'alt="logo"/>
                <h1>SEJA UM VIAJANTE ESPACIAL</h1>
                <img src='https://www.pngmart.com/files/6/Rocket-PNG-Clipart.png'alt="logo"/>
            </Header>
            <Main>
                <h2>CANDIDATAR-SE A UMA VAGA</h2>
                <div>
                    <label>Nome:</label>
                    <input type={'text'} placeholder="Insira seu nome"/>
                </div>
                <div>
                    <label>Idade:</label>
                    <input type={'number'} placeholder="Informe a sua idade"/>
                </div>
                <div>
                    <label>Diga porque você é um bom candidato:</label>
                    <input type={'text'} placeholder="Descreva"/>
                </div>
                <div>
                    <label>Profissão:</label>
                    <input type={'text'} placeholder="Informe sua profissão"/>
                </div>
                <div>
                    <label>País de origem:</label>
                    <input type={'text'} placeholder="Informe seu país"/>
                </div>
                <div>
                    <label>Viagem:</label>
                    <input type={'text'} placeholder="Informe a viagem de seu interesse"/>
                </div>
            </Main>
            <Footer>
                <button onClick={goToTrips} >Voltar</button>
                <button>Candidatar-se</button>
            </Footer>
        </DivPai>
    )
}

export default ApplicationsFormPage;
