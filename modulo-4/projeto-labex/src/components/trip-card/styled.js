import styled from "styled-components"

export const Card = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-style: dashed;
    padding: 10px;
    border-width: 5px;
    box-shadow: 10px 10px 10px 10px black;
    border-style: groove;
    border-color: black;
    border-radius: 10px;
    padding: 30px;
    background-image: url('https://cdn.radiojotafm.com.br/upload/dn_arquivo/2022/01/o-dia-do-astronauta-e-comemorado-no-dia-8-de-janeiro.jpg');
    background-size: 800px;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    

`
export const Main = styled.div `
    display: grid;
    grid-template-columns: 45% 45%;
    gap: 30px;
    justify-content: center;
    padding: 20px;
    
`
