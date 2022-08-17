import React from "react";
import {DivPai, Footer, Header, Main } from "./styled";
import{useNavigate} from 'react-router-dom';
import { TripCard } from "../../components/trip-card/TripCard";


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
                <img src='https://www.pngmart.com/files/6/Rocket-PNG-Clipart.png'alt="logo"/>
                <h1>VIAGENS DISPONÍVEIS</h1>
                <img src='https://www.pngmart.com/files/6/Rocket-PNG-Clipart.png'alt="logo"/>
            </Header>
            <Main>
                <TripCard/>
            </Main>
            <Footer>
                <button onClick={goToHome} >Voltar</button>
                <button onClick={goToForm} >Candidatar-se</button>
            </Footer>
        </DivPai>
    )
}

export default ListTripPage;
