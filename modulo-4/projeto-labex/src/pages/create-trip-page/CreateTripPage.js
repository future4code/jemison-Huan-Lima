import React from "react";
import { DivPai, Footer, Header, Main } from "./styled";
import {useNavigate} from 'react-router-dom'

function CreateTripPage(){

    const navigate = useNavigate();

    const goToTrips = () => {
        navigate("/admin/trips/:id")
    }


    return(
        <DivPai>
            <Header>
                <img src='https://www.pngmart.com/files/6/Rocket-PNG-Clipart.png'alt="logo"/>
                <h1>CADASTRAR UMA NOVA VIAGEM</h1>
                <img src='https://www.pngmart.com/files/6/Rocket-PNG-Clipart.png'alt="logo"/>
            </Header>
            <Main>
                <h2>INFORMAR DADOS DA NOVA VIAGEM</h2>
                <div>
                    <label>Nome:</label>
                    <input type={'text'} placeholder="Nome da viagem"/>
                </div>
                <div>
                    <label>Planeta:</label>
                    <input type={'text'} placeholder="Planeta de destino"/>
                </div>
                <div>
                    <label>Data:</label>
                    <input type={'date'} placeholder="Data de partida"/>
                </div>
                <div>
                    <label>Descrição:</label>
                    <input type={'text'} placeholder="Descreva a viagem"/>
                </div>
                <div>
                    <label>Duração:</label>
                    <input type={'number'} placeholder="Duração em dias"/>
                </div>
                
            </Main>
            <Footer>
                <button onClick={goToTrips} >Voltar</button>
                <button>Cadastrar</button>
            </Footer>
        </DivPai>
    )
}

export default CreateTripPage;