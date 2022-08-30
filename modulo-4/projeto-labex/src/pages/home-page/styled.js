import styled from "styled-components"

export const DivPai = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 645px;
    width: 100%;
    background-image: url('https://thumbs.dreamstime.com/b/espa%C3%A7o-profundo-fundo-de-campo-estelar-alta-defini%C3%A7%C3%A3o-textura-do-externo-estrelado-sideral-escuro-colorido-exterior-c%C3%A9u-252780108.jpg');

`
export const Header = styled.header `
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: xx-large;
    h2{
        border-style: dashed;
        background-color: black;
        width: 275px;
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    img{
        width: 20%;
        border-style: dashed;
        background-color: blue;
        border-color: white;
        border-width: 5px;
        box-shadow: 10px 10px 10px 10px black;
    }

`

export const Main = styled.main `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    button{
        border-style: groove;
        box-shadow: 5px 5px 5px 5px black;
        height: 30px;
        width: 200px;
        font-size: large;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    button:hover{
        background-color: grey;
        cursor: pointer;
        
    }


`