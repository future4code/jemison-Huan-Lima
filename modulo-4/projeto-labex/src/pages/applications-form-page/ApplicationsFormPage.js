import React, { useState } from 'react';
import { DivPai, Header, Main } from './styled';
import {useNavigate} from 'react-router-dom';
import {useForm} from '../../hooks/useForm';
import { BASE_URL } from '../../constants/constants';
import axios from 'axios';
import {useGetTrips} from '../../hooks/useGetTrips'

function ApplicationsFormPage(){

    const [form, onChange, clear] = useForm({name:"", age:"", 
    applicationText:"", profession:"", country:""})

    const [idTrip, setIdTrip] = useState('')
    
    const navigate = useNavigate();


    const trips = useGetTrips().map((trip) =>{
        
        return(
            
            <option key={trip.id} value={trip.id}>{trip.name}</option>
            
        )
    })

    const register = (event) => {
        event.preventDefault()

        axios.post(`${BASE_URL}huan-lima-jemison/trips/${idTrip}/apply`, form)
        .then((response) => {
            alert(response.message ("Viagem cadastrada com sucesso"))
        }).catch((error) => {
            console.log(error.message)
        })
        clear()
        
    }


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
            <Main onSubmit={register}>
                <h2>CANDIDATAR-SE A UMA VAGA</h2>
                
                <select>

                        <option value="disable">Escolha sua viagem</option>
                        {trips}
                        
                </select>
                    
                
                <div>
                    <label htmlFor='nome'>Nome:</label>
                    <input 
                    id='nome'
                    name='nome'
                    value={form.name}
                    onChange={onChange}
                    type={'text'} 
                    placeholder="Insira seu nome"
                    required
                    />
                </div>
                <div>
                    <label htmlFor='idade'>Idade:</label>
                    <input 
                    id='idade'
                    name='idade'
                    value={form.age}
                    onChange={onChange}
                    type={'text'} 
                    placeholder="Informe a sua idade"
                    required
                    />
                </div>
                <div>
                    <label htmlFor='descricao'>Diga porque você é um bom candidato:</label>
                    <input 
                    id='descricao'
                    name='descricao'
                    value={form.applicationText}
                    onChange={onChange}
                    type={'text'} 
                    placeholder="Descreva"
                    required
                    />
                </div>
                <div>
                    <label htmlFor='profissao'>Profissão:</label>
                    <input 
                    id='profissao'
                    name='profissao'
                    value={form.profession}
                    onChange={onChange}
                    type={'text'} 
                    placeholder="Informe sua profissão"
                    required
                    />
                </div>
                <div>
                    <label htmlFor='pais'>País de origem:</label>
                    <input 
                    id='pais'
                    name='pais'
                    value={form.country}
                    onChange={onChange}
                    type={'text'} 
                    placeholder="Informe seu país"
                    required
                    />
                </div>
                <div>
                    <button onClick={goToTrips} >Voltar</button>
                    <button onSubmit={register}>Candidatar-se</button>
                </div>  
            </Main>
            
        </DivPai>
    )
}

export default ApplicationsFormPage;
