import styled from "styled-components"

export const DivPai = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    button:hover{
        background-color: grey;
        
    }


`
export const Footer = styled.footer `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    button:hover{
        background-color: grey;
        
    }


`