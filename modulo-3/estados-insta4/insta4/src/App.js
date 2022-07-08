import React, { useState } from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {

  //estados

  const [inputNome, setInputNome] = useState("")
  const [inputFoto, setInputFoto] = useState("")
  const [inputPost, setInputPost] = useState("")
  const [dadosDePosts, setDados] = useState([
    {nomeUsuario:'paulinha', 
    fotoUsuario:'https://picsum.photos/50/50',
    fotoPost:'https://picsum.photos/200/150'
    },
    {nomeUsuario:'amandinha', 
    fotoUsuario:'https://picsum.photos/50/51',
    fotoPost:'https://picsum.photos/200/100'
    },
    {nomeUsuario:'joão', 
    fotoUsuario:'https://picsum.photos/50/40',
    fotoPost:'https://picsum.photos/200/120'
    }
  ])

  //eventos

  const handleInputNome = (e) => {
    setInputNome(e.target.value)
  }
  const handleInputFoto = (e) => {
    setInputFoto(e.target.value)
  }
  const handleInputPost = (e) => {
    setInputPost(e.target.value)
  }

  //adicioanr item

  const addPost = (e) => {
    e.preventDefault();
    const novoPost = {nomeUsuario: inputNome, fotoUsuario: inputFoto, fotoPost: inputPost}
    const novaListaDePosts = [...dadosDePosts, novoPost]
    setDados(novaListaDePosts)
  }

  const postagem = dadosDePosts.map((item, index) => {
    return(
        <Post key = {index}
          nomeUsuario = {item.nomeUsuario}
          fotoUsuario = {item.fotoUsuario}
          fotoPost = {item.fotoPost}
          />
    )
    
  })

return(
  <MainContainer>
      <form>
        <label>Nome:</label>
        <input
          placeholder='Insira um nome'
          value = {inputNome}
          onChange = {handleInputNome}
        />

        <label>Foto de Pefil:</label>
        <input
          placeholder='Insira uma foto de perfil'
          value = {inputFoto}
          onChange = {handleInputFoto}
        />

        <label>Foto de postagem:</label>
        <input
          placeholder='Insira uma foto'
          value = {inputPost}
          onChange = {handleInputPost}
        />
        <button onClick={addPost}>Adicionar</button>
      </form>
            {postagem}
  </MainContainer>)
};

export default App;