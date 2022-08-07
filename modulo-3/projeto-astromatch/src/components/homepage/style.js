import styled from "styled-components";

export const DivPai = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-style: groove;
    max-width: 300px;
    height: 500px;
    

`
export const Header = styled.header `
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    justify-content: center;
    align-items: center;
    
    
    p{
        color: red;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    
`

export const Main = styled.main `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-style: groove;
    
    img{
        
        text-align: center;
        max-height: 300px;
        max-width: 300px;
        
    }
    h4,h5{
        border-style: groove;
        text-align: start;
        margin: 2px 2px 2px 2px;
        
    }
    

`
export const Footer = styled.footer`
    background-color: aliceblue;
    border-style: groove;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
`