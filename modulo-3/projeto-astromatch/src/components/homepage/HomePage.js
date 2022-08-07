import axios from 'axios'
import { useEffect, useState } from 'react'
import { locGetProfile, locPostChoose, locPutClear } from '../locations/Locations';
import { DivPai, Footer, Header, Main } from './style';

function HomePage(props) {

    //Definindo estados

    const [perfil, setPerfil] = useState([]);
    


    
    //Esta função da é acionada com o click do botão de match
    const postChoosePersonMatch = (e) => {
        e.preventDefault();

        axios.post(locPostChoose, {
            'id': perfil.id,
            'choice': true
        })
        .then((response) => {
            alert("Match!")
            getProfileToChoose()
        })
        .catch((error) => {
            alert("Tente novamente!")
        })
        
    }

    



    //Esta função é acionada no click do botão de unMatch
    const postChoosePersonUnmatch = (e) => {
        e.preventDefault();

        axios.post(locPostChoose, {
            'id': perfil.id,
            'choice': false
        })
        .then((response) => {
            alert("Umm!")
            getProfileToChoose()
        })
        .catch((error) => {
            alert("Tente novamente!")
        })
        
    }

    

    
    const getProfileToChoose = () =>{
        axios.get(locGetProfile)
        .then((response) => setPerfil(response.data.profile))
        .catch((error) => alert('Tente novamente!'))
    }

    useEffect(() => {
        getProfileToChoose()
    }, [])


    const putClear = (e) =>{
        e.preventDefault();
        
        axios.put(locPutClear)
        .then((response) => setPerfil(response.data))
        .catch((error) => alert('Tente novamente!'))
    }
    


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
                <button onClick={postChoosePersonUnmatch}>x</button>
                <button type='button' onClick={postChoosePersonMatch}> <img src='https://greenpng.com/wp-content/uploads/2020/06/untitleddesign_1_original-8-2.png' width={10}/> </button>
            </Footer>

            <button onClick={() => props.changeScreen('list')}>Matchs</button>
            <button> Limpar </button>


        </DivPai>
    )
}

export default HomePage;