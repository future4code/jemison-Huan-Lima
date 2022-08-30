import React from 'react';
import {useNavigate} from 'react-router-dom';
import { DivPai, Header, Main } from './styled';

function HomePage(){

    const navigate = useNavigate();

    const goToTrips = () => {
        navigate("/trips/list")
    }

    const goToLogin = () => {
        navigate("/login")
    }

    return(
        <DivPai>
            <Header>
                <img src='https://svgsilh.com/svg_v2/154997.svg' alt="logo"/>
                <h2>LabeX</h2>
            </Header>
            <Main>
                <button onClick={goToTrips} >Viagens disponíveis</button>
                <button onClick={goToLogin} >Área administrativa</button>
            </Main>
        </DivPai>
    )
}

export default HomePage;
