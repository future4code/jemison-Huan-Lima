import styled from "styled-components"

export const DivPai = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('http://jornalismojunior.com.br/wp-content/uploads/2021/04/FINAL-Rebeca-construcao-de-foguetes-espaciais.png');
    height: 645px;
    

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

export const Form = styled.form `
    border-style: groove;
    margin-top: 200px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px;
    background-color: blue;
    box-shadow: 10px 10px 10px 10px black;
    border-style: groove;
    border-color: black;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    font-size: large;
    h2{
        text-align: center;
    }
    
    button:hover{
        background-color: grey;
        cursor: pointer;
        
    }
    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: start;
        gap: 5px;
        
    }
    button{
        margin-top: 20px;
        width: 300px;
        font-size: x-large;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    input{
        width: 500px;
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