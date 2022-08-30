import styled from "styled-components"

export const DivPai = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('http://jornalismojunior.com.br/wp-content/uploads/2021/04/FINAL-Rebeca-construcao-de-foguetes-espaciais.png');
    

`
export const Header = styled.header `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 5px;
    background-color: blue;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999px;
    box-shadow: 10px 10px 10px 10px rgba(0, 0, 0);
    img{
        width: 5%;
        padding: 20px;
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
    margin-top: 150px;

`
export const Footer = styled.footer `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    height: 80px;
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        border-style: groove;
        box-shadow: 5px 5px 5px 5px black;
        height: 35px;
        width: 200px;
        font-size: x-large;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        background-color: blue;
        color: white;
        
    }
    button:hover{
        background-color: grey;
        cursor: pointer;
        
    }


`
