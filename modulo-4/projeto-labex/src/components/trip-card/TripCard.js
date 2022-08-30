import React from "react";
import { useGetTrips } from "../../hooks/useGetTrips";
import { Card, Main } from "./styled";

export function TripCard(){
    const trips = useGetTrips()

    return(
        <Main>
            {trips.map((trip) =>{
                return(
                    <Card>
                        <h3>{trip.name}</h3>
                        <h4>Planeta: {trip.planet}</h4>
                        <h4>Duração: {trip.durationInDays} dias</h4>
                        <h4>Data: {trip.date}</h4>
                        <p>{trip.description}</p>
                    </Card>
                )
            })}
        </Main>
    )
}