import React from "react";
import {useNavigate} from 'react-router-dom';
import { BASE_URL } from "../../constants/constants";
import useRequestData from "../../hooks/useRequestData/useRequestData";
import { Card, DivPai, Footer, Header, Main} from "./styled";

function AdminHomePage(){

    
    const navigate = useNavigate();

    const goToTripDetailsPage = (id) => {
        navigate(`/admin/trips/${id}`)
    }


    const [data, isLoading, error] = useRequestData(`${BASE_URL}/trips`)

    const mapTrips = data && data.trips && data.trips.map((trip) => {
        return(

            
           
                <div key={trip.id}>
                    
                    <Card onClick={() => goToTripDetailsPage(trip.id)}>
                        <section>
                            <h3>{trip.name}</h3>
                        </section>
                        <section>
                            <h4>Planeta: {trip.planet}</h4>
                        </section>
                    </Card>
                    
                </div>

            
        )
    })

    const goToLogout = () => {
        localStorage.clear()
        navigate("/login")
    }

    const goToCreateTrip = () => {
        navigate("/admin/trips/create")
    }

    return(
        <DivPai>

            <Header>
                <img src='https://www.pngmart.com/files/6/Rocket-PNG-Clipart.png'alt="logo"/>
                <h1>Viagens</h1>
                <img src='https://www.pngmart.com/files/6/Rocket-PNG-Clipart.png'alt="logo"/>
            </Header>

            
      
            <Main>
                    {isLoading && <p>Carregando...</p>}
                    {!isLoading && error && <p>Ocorreu um erro</p>}
                    {!isLoading && data && data.trips && data.trips.length > 0 && mapTrips}
                    {!isLoading && data && data.trips && data.trips.length === 0 && (
                    <p>Nenhuma viagem encontrada!</p>)}
            </Main>
            <Footer>
                <button onClick={goToLogout}>Sair</button>
                <button onClick={goToCreateTrip}>Cadastrar nova viagem</button>
            </Footer>
            

        </DivPai>
    )
}

export default AdminHomePage;