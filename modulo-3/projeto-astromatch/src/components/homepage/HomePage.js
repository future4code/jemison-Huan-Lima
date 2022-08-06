import axios from 'axios'
import { useEffect, useState } from 'react'
import { locGetProfile, locPostChoose } from '../locations/Locations';
import { DivPai, Footer, Header, Main } from './style';

function HomePage() {

    //Definindo estados

    const [perfil, setPerfil] = useState({});
    const [match, setMatch] = useState('')

    const headers = {
        headers:{'Content-Type': 'application/json'}
    }

    const body = {
        'id': perfil.id,
        'choice': true
    }

    const postChoosePerson = () => {
        axios.post(locPostChoose, headers, body)
        
    }

    
    const getProfileToChoose = () =>{
        axios.get(locGetProfile)
        .then((response) => setPerfil(response.data.profile))
        .catch((error) => alert('Tente novamente!'))
    }

    useEffect(() => {
        getProfileToChoose()
    }, [])


    return(
        
        <DivPai>
            <Header>
                <p>astromatch</p>
            </Header>
            <Main>
                <img src={perfil.photo}/>
                <h4>{perfil.name}</h4>
                <h5>{perfil.bio}</h5>
            </Main>

            <Footer>
                <button>x</button>
                <button type='button'> <img src='https://greenpng.com/wp-content/uploads/2020/06/untitleddesign_1_original-8-2.png' width={10}/> </button>
            </Footer>

            


        </DivPai>
    )
}

export default HomePage;