import React, {useState} from "react";
import {DivRemetente, DivMsg, DivTop, DivGeral, PNome, PMsg, DivMensagem, InputMensagem, CardMensagem} from './style'



function Mensagem(){

    //estados
    const [inputNome, setInputNome] = useState ("")
    const [inputMensagem, setInputMensagem] = useState ("")
    const [listaDeMensagens, setMensagens] = useState([])


    //eventos
    const handleInputNome = (e) => {
        setInputNome(e.target.value)
    }

    const handleInputMensagem = (e) => {
        setInputMensagem(e.target.value)
    }


    //adicionar mensagem

    const addMensagem = (e) => {
        e.preventDefault();

        const novaMensagem = {nome: inputNome, mensagem: inputMensagem}
        const novaListaDeMensagens = [...listaDeMensagens,novaMensagem]
        setMensagens(novaListaDeMensagens)
        setInputNome("")
        setInputMensagem("")
    }

    const mensagens = listaDeMensagens.map((remetente, index) => {
        return(
            <CardMensagem key={index}>
                <PNome>{remetente.nome}:</PNome>
                <PMsg>{remetente.mensagem}</PMsg>
            </CardMensagem>
        )
    })


return(

        <DivGeral>

                <DivTop>         
                    
                        {mensagens}
                    
                </DivTop>

            <DivMensagem>

                <DivRemetente>

                    <label>Remetente:</label>
                    <input
                        placeholder="Insira seu nome"
                        value = {inputNome}
                        onChange={handleInputNome}
                    />

                </DivRemetente>

                <DivMsg>

                    <label>Mensagem:</label>
                    <InputMensagem
                        placeholder="Insira uma mensagem"
                        value={inputMensagem}
                        onChange={handleInputMensagem}
                    /> 

                </DivMsg>
                    <button onClick={addMensagem}>Enviar</button>     
            
            </DivMensagem>

        </DivGeral>
    )
}


export default Mensagem;