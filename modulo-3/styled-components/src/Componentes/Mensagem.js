import React from "react";
import {DivRemetente, DivMsg, DivTop, DivGeral, DivMensagem, InputMensagem} from './style'


function Mensagem(props){

    return(

        <DivGeral>

            <DivTop>

            </DivTop>

            <DivMensagem>

                <DivRemetente>

                    <label>Remetente:</label>
                    <input/>

                </DivRemetente>

                <DivMsg>

                    <label>Mensagem:</label>
                    <InputMensagem/> 

                </DivMsg>

                <button>Enviar</button>     
            </DivMensagem>

        </DivGeral>
    )
}





export default Mensagem;