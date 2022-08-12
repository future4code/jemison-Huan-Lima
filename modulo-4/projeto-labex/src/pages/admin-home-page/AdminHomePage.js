import React from "react";
import {useNavigate} from 'react-router-dom';
import { DivPai, Footer, Header, Main } from "./styled";

function AdminHomePage(){

    
    const navigate = useNavigate();

    const goToLogout = () => {
        navigate("/login")
    }

    const goToCreateTrip = () => {
        navigate("/admin/trips/create")
    }

    return(
        <DivPai>
            <Header>
                <img src='https://www.pngmart.com/files/6/Rocket-PNG-Clipart.png'/>
                <h1>VIAGENS DISPONÍVEIS</h1>
                <img src='https://www.pngmart.com/files/6/Rocket-PNG-Clipart.png'/>
            </Header>
            <Main>
                
            </Main>
            <Footer>
                <button onClick={goToLogout} >Sair</button>
                <button onClick={goToCreateTrip} >Cadastrar nova viagem</button>
            </Footer>
        </DivPai>
    )
}

export default AdminHomePage;