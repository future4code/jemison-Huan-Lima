import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/constants';
import useRequestData from '../../hooks/useRequestData/useRequestData';
import { Card, DivPai, Footer, Header, Main } from './styled';

function TripDetailsPage(){

    const id = useParams()
    const navigate = useNavigate();
     

    const [data, isLoading, error] = useRequestData(`${BASE_URL}/trip/${id.id}`)

    const mapTrips = data && data.trip && data.trip.candidates && data.trip.candidates.map((candidate) => {
        return(
  
                <div key={candidate.id}>
                    
                    <Card>
                        <section>
                            <p>Nome: {candidate.name}</p>
                        </section>
                        <section>
                            <p>Idade: {candidate.age}</p>
                        </section>
                        <section>
                            <p>País: {candidate.country}</p>
                        </section>
                        <section>
                            <p>Profissão: {candidate.profession}</p>
                        </section>
                        <section>
                            <p>Porque mereço ir: {candidate.applicationText}</p>
                        </section>
                        <section>
                            <button>Aprovar</button>
                            <button>Reprovar</button>
                        </section>
                    </Card>  
                    
                    
                </div>

            
        )
    })


    const goToTripsList = () => {
        navigate("/admin/trips/list")
    }
    const goToLogout = () => {
        navigate("/login")
    }

    return(
        <DivPai>

            <Header>
                <img src='https://svgsilh.com/svg_v2/154997.svg'alt="logo"/>
                <h1>Escolha os candidatos</h1>
                <img src='https://svgsilh.com/svg_v2/154997.svg'alt="logo"/>
            </Header>

            
      
            <Main>
                    
                    {isLoading && <p>Carregando...</p>}
                    {!isLoading && error && <p>Ocorreu um erro</p>}
                    {!isLoading && data && data.trip && data.trip.candidates && data.trip.candidates.length > 0 && mapTrips}
                    {!isLoading && data && data.trip && data.trip.candidates && data.trip.candidates.length === 0 && (
                    <p>Nenhum candidato encontrado!</p>)}
                    
            </Main>
            <Footer>
                    <button onClick={goToTripsList}>Voltar para viagens</button>
                    <button onClick={goToLogout}>Sair</button>
            </Footer>
            

        </DivPai>
    )
}



export default TripDetailsPage;