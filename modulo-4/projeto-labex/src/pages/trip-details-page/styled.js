import styled from "styled-components"

export const DivPai = styled.div `
    display: flex;
    flex-direction: column;
    
`
export const Header = styled.header `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    background-color: royalblue;
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;
    img{
        width: 10%;
        padding: 5px;
    }

`

export const Main = styled.main `
    
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin: 5px 5px 5px 5px;
        
    
`


export const Card = styled.button `
    display: flex;
    flex-direction: column;
    border-style: groove;
    border-color: blue;
    justify-content: space-between;
    align-items: center;
    background-color: antiquewhite;
    width: 100%;
    height: 350px;
    
    button{
        width: 200px;
        margin-bottom: 20px;
        margin-top: 10px;
        margin-left: 2px;
        margin-right: 2px;
    }

    button:hover{
        cursor: pointer;
    }
    
    
`

export const Footer = styled.footer `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    button{
        margin: 30px;
        width: 25%;
        height: 30px;
    }
    button:hover{
        background-color: grey;
        cursor: pointer;
    }
`