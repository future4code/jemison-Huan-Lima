import styled from 'styled-components'

export const DivPai = styled.div `
    display: flex;
    flex-direction: column;  
`

export const Header = styled.header `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 100%;
    

`
export const DivRemetente = styled.div `
    font-size: small;
    margin-left: 1vw;
    margin-right: 1vw;

`
export const DivMsg = styled.div `
    font-size: small;
    margin-right: 1vw;
`

export const InputMensagem = styled.input `
    
    width: 30vw;
    
`

export const DivGeral = styled.div `
    display: grid;
    grid-template-rows: 30vw 8vw;
    
`


export const DivTop = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
`
export const CardMensagem = styled.section `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: 10px;
    padding: 1px;
    border-style: groove;
    width: 40vw;
    background-color: gainsboro;
    margin-bottom: 1vw;
    margin-right: 1vw;
`


export const DivMensagem = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-start;   
`


export const Main = styled.main `
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;   
`

export const DivLeft = styled.div `
    background-color: orange;
`
export const DivCenter = styled.div `   
`

export const DivRight = styled.div `
    background-color: orange;
`

export const Footer = styled.footer `
    text-align: center;
    font-size: small;
    width: 100%;
    height: 34px;
    background-color: gray;   
`

export const PNome = styled.p `
    font-size: medium;
`

export const PMsg = styled.p `
    font-size: small;
`