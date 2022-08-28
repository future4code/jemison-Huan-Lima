import styled from "styled-components"

export const DivPai = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: url('http://jornalismojunior.com.br/wp-content/uploads/2021/04/FINAL-Rebeca-construcao-de-foguetes-espaciais.png');
    height: 650px;

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
    box-shadow: 10px 10px 10px 10px black;
    border-style: groove;
    border-color: black;
    border-radius: 10px;
    margin-top: 250px;
    margin-bottom: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 30px;
    background-color: blue;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    button{
        width: 120px;
        margin-top: 25px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
        gap: 10px;
    }


`