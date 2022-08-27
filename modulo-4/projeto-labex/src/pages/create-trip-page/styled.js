import styled from "styled-components"

export const DivPai = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

export const Form = styled.form `
    border-style: groove;
    margin-top: 80px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px;
    
    button:hover{
        background-color: grey;
        
    }
    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: start;
        gap: 10px;
        
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
    button{
        width: 150px;
    }


`