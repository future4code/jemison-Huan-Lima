import React, { useState } from 'react';
import { DivPai, Form, Header} from './styled';
import {useNavigate} from 'react-router-dom';
import { BASE_URL } from '../../constants/constants';
import axios from 'axios';
import {useGetTrips} from '../../hooks/useGetTrips';
import { useForm } from '../../hooks/useForm';


function ApplicationsFormPage(){

    const {form, onChange, clear} = useForm({name:"", age:"", applicationText:"",
     profession:"", country:""});

    const [idTrip, setIdTrip] = useState('')
    
    const navigate = useNavigate();

    //const header = {
    //    'Content-Type': 'application/json'
    //}

    const updateIdTrip = (event) => {
        setIdTrip(event.target.value)
    } 

    const trips = useGetTrips().map((trip) =>{
            
        return(
            
            <option key={trip.id} value={trip.id}>{trip.name}</option>
            
        )
        
    })

    const register = (event) => {
        event.preventDefault()


        axios.post(`${BASE_URL}huan-lima-jemison/trips/${idTrip}/apply`, form)
        .then((response) => {
            alert("Cadastro realizado com sucesso")      
        }).catch((error) => {
            alert("Erro ao realizar cadastro")
            console.log(error)
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
            <Form onSubmit={register}>

                <h2>CANDIDATAR-SE A UMA VAGA</h2>
                
                <select
                    
                    onChange = {updateIdTrip}
                    value={idTrip}
                    required
                >

                        <option>Escolha sua viagem</option>
                        {trips}
                        
                </select>
                    
                
                <div>
                    <label htmlFor='nome'>Nome:</label>
                    <input 
                
                        name='name'
                        value = {form.name}
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
                        name='age'
                        value={form.age}
                        onChange={onChange}
                        type={'number'} 
                        placeholder="Informe a sua idade"
                        required
                    />
                </div>
                <div>
                    <label htmlFor='descricao'>Diga porque você é um bom candidato:</label>
                    <input 
                        id='descricao'
                        name='applicationText'
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
                        name='profession'
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
                        name='country'
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
            </Form>
            
        </DivPai>
    )
}

export default ApplicationsFormPage;
