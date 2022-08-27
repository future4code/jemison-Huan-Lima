import {useState, useEffect} from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";

export function useGetTrips() {

    const [trips, setTrips] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/trips`)
        .then(response => {
            setTrips(response.data.trips)})
        .catch(error => {
            console.log(error)
        })
    }, [])

    return trips
}