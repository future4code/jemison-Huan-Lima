import axios from "axios";
import { locGetMatches } from "../locations/Locations";
import{useState, useEffect} from 'react'

function MatchsPage(props) {

    const [match, setMatch] = useState([])

    const getMatches = () =>{
        axios.get(locGetMatches)
        .then((response) => setMatch(response.data.matches))
        .catch((error) => alert('Tente novamente!'))
    }

    

    const allMatches = match.map((perfil) => {
        console.log(perfil.name)
    })



    

    return(
        <div>
            
            <button onClick={allMatches}> Visualizar matches </button>
            <button onClick={() => props.changeScreen('start')}>Página inicial</button>
            <p>{match.name}</p>
        </div>

    )
}

export default MatchsPage;