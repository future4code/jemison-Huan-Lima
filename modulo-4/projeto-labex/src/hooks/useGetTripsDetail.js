import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";

//Esse Hook retorna todas as viagens detalhadas na tela principal da administração
//Só renderiza com acesso

export function useGetTripsDetail(){

    const [tripDetails, setTripDetails] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}huan-lima-jemison/trips`)
        .then(response => {
            setTripDetails(response.data.trips)})
        .catch(error => {
            console.log(error)
        })
    }, [])

    return tripDetails
    
}