import styled from "styled-components"

export const DivPai = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: url('http://jornalismojunior.com.br/wp-content/uploads/2021/04/FINAL-Rebeca-construcao-de-foguetes-espaciais.png');
    background-size: 100%;
    height: 100%;
    
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
        
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin: 150px 5px 5px 5px;
        
    
`


export const Card = styled.button `
    display: flex;
    flex-direction: column;
    border-style: groove;
    border-color: blue;
    justify-content: space-between;
    align-items: center;
    box-shadow: 3px 3px 3px 3px black;
    background-image: url('https://cdn.radiojotafm.com.br/upload/dn_arquivo/2022/01/o-dia-do-astronauta-e-comemorado-no-dia-8-de-janeiro.jpg');
    background-size: 600px;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
        background-color: grey;
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
        width: 250px;
        height: 40px;
        font-size: large;
        background-color: blue;
        color: white;
        border-style: groove;
        border-color: black;
        border-width: 5px;
    }
    button:hover{
        background-color: grey;
        cursor: pointer;
    }
`