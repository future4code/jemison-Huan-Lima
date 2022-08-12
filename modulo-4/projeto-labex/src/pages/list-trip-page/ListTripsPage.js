import React from "react";
import { DivPai, Footer, Header, Main } from "./styled";
import{useNavigate} from 'react-router-dom';

function ListTripPage(){

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/")
    }

    const goToForm = () => {
        navigate("/trips/application")
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
                <button onClick={goToHome} >Voltar</button>
                <button onClick={goToForm} >Inscrever-se</button>
            </Footer>
        </DivPai>
    )
}

export default ListTripPage;
