import React from "react";
import { DivPai, Form, Header} from "./styled";
import {useNavigate} from 'react-router-dom'
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL} from "../../constants/constants";

function CreateTripPage(){

    const {form, onChange, clear} = useForm(
            {name:'', 
            planet:'', 
            date:'',
            description:'', 
            durationInDays:''})
    
    
    
    const navigate = useNavigate();

    const goToTrips = () => {
        navigate("/admin/trips/list")
    }

    const header = {
        headers: {
            auth:localStorage.getItem("token")
        }
    }


    const createTrip = (event) => {
        event.preventDefault()

        
        console.log(form)
        axios.post(`${BASE_URL}/trips`, form, header)
        .then((response) => {
            alert('Viagem criada com sucesso!')
        })
        .catch((error) => {
            alert(error.message)
        })
        clear()
    }


    return(
        <DivPai>
            <Header>
                <img src='https://svgsilh.com/svg_v2/154997.svg'alt="logo"/>
                <h1>CADASTRAR UMA NOVA VIAGEM</h1>
                <img src='https://svgsilh.com/svg_v2/154997.svg'alt="logo"/>
            </Header>
            <Form onSubmit={createTrip}>
                <h2>INFORMAR DADOS DA NOVA VIAGEM</h2>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input 
                        
                        name= "name"
                        type={'text'} 
                        value={form.name}
                        onChange={onChange}
                        placeholder="Nome da viagem"
                        required
                        pattern="^.{4,}"
                        title='Informe seu nome completo'
                    />
                </div>
                <div>
                    <label htmlFor="planeta">Planeta:</label>
                    <input 
                        name="planet"
                        type={'text'}
                        value={form.planet}
                        placeholder="Planeta de destino"
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="data">Data:</label>
                    <input 
                        name='date'
                        type={'date'} 
                        value={form.date}
                        onChange={onChange}
                        placeholder="Data de partida"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="descricao">Descrição:</label>
                    <input 
                        name='description'
                        type={'text'} 
                        value={form.description}
                        onChange={onChange}
                        placeholder="Descreva a viagem"
                        required
                        pattern="^.{5,}"
                        title='Descreva melhor a viagem'
                    />
                </div>
                <div>
                    <label htmlFor="duracao">Duração:</label>
                    <input 
                        name="durationInDays"
                        type={'number'} 
                        value={form.durationInDays}
                        onChange={onChange}
                        placeholder="Duração em dias"
                        required
                    />
                </div>
                <div>
                    <button onClick={goToTrips} >Voltar</button>
                    <button onSubmit={createTrip}>Cadastrar</button>
                </div>
                
            </Form>
            
        </DivPai>
    )
}

export default CreateTripPage;